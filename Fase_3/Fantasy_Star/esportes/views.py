from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import pymongo
from bson import ObjectId


# CONNECT TO DATABASE
connection = pymongo.MongoClient("localhost", 27017)

# CREATE DATABASE
database = connection['FantasyDreamsMongo']
# CREATE COLLECTION
collection = database['esportes']


def get_single_data(document_id):
    """
    get document data by document ID
    :param document_id:
    :return:
    """
    data = collection.find_one({'_id': ObjectId(document_id)})
    return data

def index(request):
    test_cursor = collection.find({})
    resposta_lista = ""
    for document in test_cursor:
        print("Mateus document in test_cursor: ", document)
        resposta_lista += str(document) + "<br>"
    test_data = get_single_data("5f0cecc7b3f4d72f78dda7a7")
    print("MATEUS, test_data ", test_data)
    print("MATEUS, test_data['esporte'] ", test_data['esporte'])
    resposta_simples = "<h1>Test MongoDB connection!</h1>test_data = %s" % test_data
    return HttpResponse(resposta_simples + "<br> <br> " + resposta_lista)

def lista(request):
    test_cursor = collection.find({})
    resposta_lista = ""
    for document in test_cursor:
        print("Mateus document in test_cursor: ", document)
        resposta_lista += str(document) + "<br>"
    return HttpResponse(resposta_lista)


