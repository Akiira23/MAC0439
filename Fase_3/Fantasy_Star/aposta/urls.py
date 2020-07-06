from django.urls import path
from . import views

app_name = 'aposta'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id_aposta>/', views.detail, name='detail'),
    path('<int:id_aposta>/results/', views.results, name='results'),
    path('<int:id_aposta>/make/', views.make, name='make'),
]