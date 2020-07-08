from django.shortcuts import get_object_or_404, render
from .models import *
from django.http import HttpResponse
from py2neo import Graph, Node, Relationship
# from neomodel import db

g = Graph(uri="bolt://localhost:7687", password="123", name="Chat")

# Create your views here.
def index(request):
    # user_list = Graph().objects.order_by('-nome')[:10]
    user_list = g.nodes.match("User")
    print(user_list)
    context = {'user_list': user_list}
    return render(request, 'chat/index.html', context)

def register(request):
    u = User()
    u.register("CHAT", "email")
    user_nodes = g.nodes.match("User")
    context = {'user_list': user_nodes}
    return render(request, 'chat/index.html', context)

def friend(request):
    User.friend('Cerco', 'boyes')

    user_nodes = g.run("MATCH (e1:User {nome: 'Cerco'})-[:FRIENDS_WITH]->(e2:User) RETURN e2")
    for u in user_nodes:
        print(u["e2"]["name"])
    context = {'user_list': user_nodes}
    return render(request, 'chat/index.html', context)

def register_chat(request):
    return

