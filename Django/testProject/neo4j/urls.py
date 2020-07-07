
from django.urls import path
from . import views

# config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'

app_name = 'neo4j'
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
]