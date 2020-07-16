from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('aposta/', include('aposta.urls')),
    path('esportes/', include('esportes.urls')),
    path('jogadores/', include('jogadores.urls')),
    path('partidas/', include('partidas.urls')),
    path('times/', include('times.urls')),
    path('torneios/', include('torneios.urls')),
    path('chat/', include('chat.urls')),
    path('admin/', admin.site.urls),
]