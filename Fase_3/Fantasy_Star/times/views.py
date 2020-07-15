from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import pymongo
from bson import ObjectId


# CONNECT TO DATABASE
connection = pymongo.MongoClient("localhost", 27017)
# GET DATABASE
database = connection['FantasyDreamsMongo']
# GET COLLECTION
collection = database['times']


def get_single_data(document_id):
    """
    get document data by document ID
    :param document_id:
    :return:
    """
    data = collection.find_one({'_id': ObjectId(document_id)})
    return data

def index(request):
    resposta_simples = "<h1>Test MongoDB connection! TIMES!</h1>"
    return HttpResponse(resposta_simples)

def lista(request):
    test_cursor = collection.find()
    resposta_lista = []

    for document in test_cursor:
        resposta_lista.append(document)
    return render(request, "times/lista.html", {'dados': resposta_lista})

def seleciona_time(nome_do_time):
    test_cursor = collection.find({"nome": nome_do_time})
    for document in test_cursor:
        print("document: ", document)
        print()
        print()
    return

