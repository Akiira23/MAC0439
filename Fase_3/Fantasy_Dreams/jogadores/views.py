from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import get_object_or_404, render
import pymongo
from bson import ObjectId


# CONNECT TO DATABASE
connection = pymongo.MongoClient("localhost", 27017)
# GET DATABASE
database = connection['FantasyDreamsMongo']
# GET COLLECTION
collection = database['jogadores']


def get_single_data(document_id):
    """
    get document data by document ID
    :param document_id:
    :return:
    """
    data = collection.find_one({'_id': ObjectId(document_id)})
    return data


def index(request):
    msg = ""
    jogadores_name = request.GET.get('name', '')
    
    if jogadores_name == '':
        return lista(request)
    

def lista(request):
    test_cursor = collection.find()
    resposta_lista = []

    for document in test_cursor:
        resposta_lista.append(document)
    return render(request, "jogadores/lista.html", {'dados': resposta_lista})


