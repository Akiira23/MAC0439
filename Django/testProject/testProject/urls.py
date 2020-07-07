
from django.contrib import admin
from django.urls import path, include
from py2neo import Graph, Node, Relationship

# config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'

urlpatterns = [
    path('neo4j/', include('neo4j.urls')),
    path('admin/', admin.site.urls),
]
