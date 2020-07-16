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
    msg = ""
    sport_name = request.GET.get('name', '')
    try:
        the_sport = collection.find_one({ 'esporte': sport_name })
        tournments = database.torneios.find_one({ 'esporte': sport_name })
    except expression as identifier:
        msg = "Não existe esse esporte"
    finally:
        return render(request, "esportes/index.html", { 
            'esporte': the_sport, 'torneios': tournments, 
            'nome': sport_name, 'mensagem': msg })
    # resposta_simples = "<h1>Test MongoDB connection! ESPORTES!</h1>"

def lista(request):
    test_cursor = collection.find()
    resposta_lista = []

    for document in test_cursor:
        resposta_lista.append(document)
    return render(request, "esportes/lista.html", {'dados': resposta_lista})


