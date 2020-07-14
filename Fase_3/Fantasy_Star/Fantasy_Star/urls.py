from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('aposta/', include('aposta.urls')),
    path('esportes/', include('esportes.urls')),
    path('jogadores/', include('jogadores.urls')),
    path('partidas/', include('partidas.urls')),
    path('admin/', admin.site.urls),
]