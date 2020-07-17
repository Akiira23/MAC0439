
from django.urls import path
from . import views

# config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'

app_name = 'chat'
urlpatterns = [
    path('', views.index, name='index'),
    
    path('users/<str:nome>/', views.user_page, name='user_page'),
    path('register/', views.register_user, name='register_user'),

    path('addfriend/', views.add_friend, name='add_friend'),
    path('friends/<str:nome>/', views.friends, name='friends'),

    path('messages/<str:chatname>/', views.chat, name='chat'),
    path('chats/invite/<str:chatname>/', views.invite_user, name='invite_user'),
    path('chats/register/', views.register_chat, name='register_chat'),
    path('chats/participants/', views.chat_participants, name='chat_participants'),
    path('chats/send_msg/', views.send_message, name='send_message'),
]