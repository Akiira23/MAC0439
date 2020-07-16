from django.urls import path
from . import views

app_name = 'aposta'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id_aposta>/', views.detail, name='detail'),
    path('<int:id_org>/membros/', views.membros, name='membros'),
    path('search/', views.search, name='search'),
    path('search_user/', views.search_user, name='search_user'),
    path('search_torneio/', views.search_torneio, name='search_torneio'),
    path('insert_user/', views.insert_user, name='insert_user'),
    path('make_user/', views.make_user, name='make_user'),
    path('insert_aposta/', views.insert_aposta, name='insert_aposta'),
    path('make_aposta/', views.make_aposta, name='make_aposta'),
]