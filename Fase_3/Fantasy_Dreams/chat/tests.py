from django.test import TestCase
from .models import *
from py2neo import Graph, Node, Relationship, Database


# Create your tests here.
class ChatTests(TestCase):
    def setUp(self):
        self.g = Graph(uri="bolt://localhost:7687", password="123", name="Chat")
        return

    def test1(self):
        # u = User()
        # u.register("CHAT", "email")
        self.assertEquals(False, False)
