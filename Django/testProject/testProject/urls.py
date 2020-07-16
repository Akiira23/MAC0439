
from django.contrib import admin
from django.urls import path, include
from py2neo import Graph, Node, Relationship

# config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'

urlpatterns = [
    path('chat/', include('chat.urls')),
    path('admin/', admin.site.urls),
]
