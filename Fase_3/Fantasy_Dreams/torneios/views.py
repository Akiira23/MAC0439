from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import pymongo
from django.shortcuts import get_object_or_404, render
from bson import ObjectId


# CONNECT TO DATABASE
connection = pymongo.MongoClient("localhost", 27017)
# GET DATABASE
database = connection['FantasyDreamsMongo']
# GET COLLECTION
collection = database['torneios']


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
    torneios_name = request.GET.get('name', '')
    
    if torneios_name == '':
        return lista(request)
    
    torneio = None
    try:
        torneio = collection.find_one({'nome': torneios_name })
    except expression as identifier:
        msg = "Não existe esse torneio"
    finally:
        return render(request, "torneios/index.html", { 
            'torneio': torneio})

def lista(request):
    test_cursor = collection.find()
    resposta_lista = []

    for document in test_cursor:
        resposta_lista.append(document)
    return render(request, "torneios/lista.html", {'dados': resposta_lista})


