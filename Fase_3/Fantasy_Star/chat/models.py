from django.db import models
from py2neo import Graph, Node, Relationship, Database
from py2neo.ogm import GraphObject
# from neomodel import db
# from neomodel import (config, StructuredNode, StringProperty, IntegerProperty,UniqueIdProperty, RelationshipTo)

g = Graph(uri="bolt://localhost:7687", password="123", name="Chat")
# db.set_connection('bolt://neo4j:123@localhost:7687')

# # Create your models here.
# class NeoUser(StructuredNode):
#     # app_label = "User"
#     user_id = UniqueIdProperty(primary_key=True)
#     email = StringProperty()
#     nome = StringProperty(unique_index=True)
#     # tel_ddd = models.SmallIntegerField()
#     # tel_numero = models.IntegerField()
#     # cpf = models.CharField(max_length=11)
#     # saldo = models.IntegerField()
#     # senha = models.CharField(max_length=30)
#     # sexo = models.CharField(max_length=1)

class User(models.Model):
    # app_label = "User"
    user_id = models.IntegerField(primary_key=True)
    email = models.CharField(max_length=60)
    nome = models.CharField(unique=True, max_length=80)
    # tel_ddd = models.SmallIntegerField()
    # tel_numero = models.IntegerField()
    # cpf = models.CharField(max_length=11)
    # saldo = models.IntegerField()
    # senha = models.CharField(max_length=30)
    # sexo = models.CharField(max_length=1)

    def find(username):
        # print("MATCH (e:User) WHERE e.nome = '{}' RETURN e".format(username))
        for a in g.run("MATCH (e:User) WHERE e.nome = '{}' RETURN e".format(username)):
            print("A"*40)
            return True
        return False

    def register(self, username, email):
        if not User.find(username):
            user = Node("User", nome=username, email=email)
            tx = g.begin()
            tx.create(user)
            tx.commit()
            return user
        return False
    
    def friend(nome1, nome2):
        for u1 in g.run("MATCH (e:User) WHERE e.nome = '{}' RETURN e".format(nome1)):
            for u2 in g.run("MATCH (e:User) WHERE e.nome = '{}' RETURN e".format(nome2)):
                tx = g.begin()
                # print(u1["e"]["nome"])
                # print(u2["e"]["nome"])
                f = Relationship(u1, "FRIENDS_WITH", u2)
                tx.create(f)
                tx.commit()
                return True
        return False

    class Meta:
        managed = True
        db_table = 'user'

class Message(models.Model):
    message_id = models.IntegerField(primary_key=True)
    conteudo = models.CharField(max_length=1000)
    timestamp = models.DateTimeField(auto_now_add=True)

    #wip
    def send(self, user_id, chat_id, content):
        for c in g.run("MATCH (c:Chat) WHERE c.id = '{}' RETURN e".format(chat_id)):
            return


    class Meta:
        managed = True
        db_table = 'messages'


class Chat(models.Model):

    class Meta:
        managed = True
        db_table = 'chats'

class Chat(models.Model):
    class Meta:
        managed = True
        db_table = 'chats'