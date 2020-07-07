from django.shortcuts import get_object_or_404, render
from .models import User
from django.http import HttpResponse
from py2neo import Graph, Node, Relationship

g = Graph(uri="bolt://localhost:7687", password="123", name="Chat")

# Create your views here.
def index(request):    
    # user_list = Graph().objects.order_by('-nome')[:10]
    user_list = g.nodes.match("User")
    context = {'user_list': user_list}
    return render(request, 'neo4j/index.html', context)

def register(request):
    u = User()
    u.register("Douglas", "email")
    user_nodes = g.nodes.match("User")
    context = {'user_list': user_nodes}
    return render(request, 'neo4j/index.html', context)