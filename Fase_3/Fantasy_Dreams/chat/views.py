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
    context = {
        'list': user_nodes,
        'title': "Usuários"
    }
    return render(request, 'chat/index.html', context)

def user_page(request, nome):
    request.session['username'] = nome
    chat_nodes = Chat.get_user_chats(nome)
    context = {
        'list': chat_nodes,
        'title': "Bem vindo, "+nome+"!",
        'subtitle': "Estes são seus chats",
        'username': nome,
    }
    return render(request, 'chat/userPage.html', context)

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

def chat(request, chatname):
    request.session['chatname'] = chatname
    username = request.session['username']
    messages = Chat.get_messages(chatname)
    if request.method == 'POST':
        form = ChatPage(request.POST)

        if form.is_valid():
            print("clean data: ", form.cleaned_data)
            mensagem = form.cleaned_data
            Message.send(username, chatname, mensagem)
            return redirect('/chat/messages/'+chatname)
    else:
        form = ChatPage()
    context = {
        'form':form,
        'title':chatname,
        'chatname':chatname,
        'list':messages,
        'username':username,
    }
    return render(request, 'chat/chat.html', context)

def friends(request, nome):
    username = request.session['username']
    query = "MATCH (e1:User)-[:FRIENDS_WITH]->(e2:User) WHERE e1.nome = '{}' RETURN e2"
    print(nome)
    query_nodes = g.run(query.format(nome))
    user_nodes = []
    for u, in query_nodes: # virgula da o unpack na tupla de um unico valor
        user_nodes.append(u)
    context = {
        'list': user_nodes,
        'title': "Meus amigos",
        'username': username,
    }
    return render(request, 'chat/friends.html', context)

def add_friend(request):

    username = request.session['username']
    if request.method == 'POST':
        form = FriendForm(request.POST)

        if form.is_valid():
            print("clean data: ", form.cleaned_data)
            friend = form.cleaned_data
            User.friend(username, friend)
            return redirect('/chat/friends/'+username)
    else:
        form = FriendForm()
    context = {
        'form':form,
        'title':"Adicione um amigo",
        'username':username,
    }
    return render(request, 'chat/friendForm.html', context)

def register_chat(request):
    username = request.session['username']
    if request.method == 'POST':
        form = ChatForm(request.POST)

        if form.is_valid():
            print("clean data: ", form.cleaned_data)
            chatname = form.cleaned_data
            chat = Chat.register(chatname)
            Chat.include_user(username, chatname)
            context = {
                'form':form,
                'title':chatname,
                'list':None,
                'username':username,
                'chatname':chatname,
            }
            return redirect('/chat/messages/'+chatname)
    else:
        form = ChatForm()
    context = {
        'form':form,
        'title':"Insira o nome do chat",
        'username':username,
    }
    return render(request, 'chat/chatForm.html', context)

def invite_user(request, chatname):
    username = request.session['username']
    if request.method == 'POST':
        form = InviteForm(request.POST)

        if form.is_valid():
            print("clean data: ", form.cleaned_data)
            invited = form.cleaned_data
            Chat.include_user(invited, chatname)
            context = {
                'form':form,
                'title':chatname,
                'username':username,
                'invited':invited,
            }
            return redirect('/chat/messages/'+chatname)
    else:
        form = InviteForm()
    context = {
        'form':form,
        'title':"Insira o nome do usuário",
        'username':username,
        'chatname':chatname,
    }
    return render(request, 'chat/inviteForm.html', context)

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


