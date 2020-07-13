
from django.urls import path
from . import views

# config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'

app_name = 'chat'
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register_user, name='register_user'),
    path('friend/', views.friend, name='friend'),
    path('chats/register', views.register_chat, name='register_chat'),
    path('chats/participants', views.chat_participants, name='chat_participants'),
    path('chats/send_msg', views.send_message, name='send_message'),
]