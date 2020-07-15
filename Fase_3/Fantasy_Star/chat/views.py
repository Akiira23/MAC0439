from django.shortcuts import get_object_or_404, render, redirect
from .models import *
from django.http import HttpResponse
from py2neo import Graph, Node, Relationship

from .forms import *
# from neomodel import db

g = Graph(uri="bolt://localhost:7687", password="123", name="Chat")

# Create your views here.
def index(request):
    # user_list = Graph().objects.order_by('-nome')[:10]
    user_nodes = g.nodes.match("User")
    context = {'list': user_nodes, 'title': "Usuários"}
    return render(request, 'chat/index.html', context)

# def register_user(request):
#     username = 'CHAT'
#     email = 'email'
#     u = User()
#     u.register(username, email)
#     user_nodes = g.nodes.match("User")
#     context = {'list': user_nodes, 'title': "Usuários"}
#     return render(request, 'chat/new.html', context)

def register_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)

        if form.is_valid():
            print("clean data: ", form.cleaned_data)
            nome, email = form.cleaned_data
            User().register(nome, email)
            print(nome, email)
            return redirect('/chat/')
    else:
        form = UserForm()
    return render(request, 'chat/userForm.html', {'form':form, 'title':"Criar usuário"})

def friend(request):
    u1 = 'boyes'
    u2 = 'Dobberson'

    f1, f2 = User.friend(u1, u2)
    query_nodes = g.run("MATCH (e1:User {nome: '{}'})-[:FRIENDS_WITH]->(e2:User) RETURN e2".format(u1))
    user_nodes = []
    print("LISTINHA!")
    for u, in query_nodes: # virgula da o unpack na tupla de um unico valor
        print(u["nome"])
        user_nodes.append(u)
    context = {'list': user_nodes, 'title': "Amigos"}
    return render(request, 'chat/index.html', context)

def register_chat(request):
    chatname = 'Miltongrado'
    username = 'Cerco'

    chat = Chat.register(chatname)
    Chat.include_user(username, chatname)
    chat_nodes = g.nodes.match("Chat")
    context = {'list': chat_nodes, 'title': "Chats"}
    return render(request, 'chat/index.html', context)

def chats_index(request):
    chat_nodes = g.nodes.match("Chat")
    context = {'list': chat_nodes, 'title': "Chats"}
    return render(request, 'chat/chatsIndex.html', context)

def chat_participants(request):
    chatname = 'Miltongrado'

    users = Chat.get_participants(chatname)
    context = {'list': users, 'title': "Participantes do chat"}
    return render(request, 'chat/index.html', context)

def send_message(request):
    chatname = 'Miltongrado'
    username = 'Cerco'
    content = 'OHAOYU SEKAI GOOD MORNING WORLD'

    # Message.send(username, chatname, content)

    messages = Message.get_chat_messages(chatname)
    context = {'list': messages, 'title': chatname}
    return render(request, 'chat/chat.html', context)


