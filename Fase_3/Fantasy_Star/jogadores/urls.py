from django.urls import path
from . import views

app_name = 'jogadores'
urlpatterns = [
    path('', views.index, name='index'),
    path('lista', views.lista, name='lista'),
]