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
    resposta_simples = "<h1>Test MongoDB connection! TORNEIOS!</h1>"
    return HttpResponse(resposta_simples)

def lista(request):
    test_cursor = collection.find()
    resposta_lista = []

    for document in test_cursor:
        resposta_lista.append(document)
    return render(request, "torneios/lista.html", {'dados': resposta_lista})

