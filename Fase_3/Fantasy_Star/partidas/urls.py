from django.urls import path
from . import views

app_name = 'partidas'
urlpatterns = [
    path('', views.index, name='index'),
    path('lista/', views.lista, name='lista'),
]