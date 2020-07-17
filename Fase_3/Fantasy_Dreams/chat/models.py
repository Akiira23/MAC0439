from django.db import models
from py2neo import Graph, Node, Relationship, Database
from py2neo.ogm import GraphObject
from datetime import datetime
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
    # user_id = models.IntegerField(primary_key=True)
    # email = models.CharField(max_length=60)
    # nome = models.CharField(unique=True, max_length=80)
    # tel_ddd = models.SmallIntegerField()
    # tel_numero = models.IntegerField()
    # cpf = models.CharField(max_length=11)
    # saldo = models.IntegerField()
    # senha = models.CharField(max_length=30)
    # sexo = models.CharField(max_length=1)

    def find(username):
        # print("MATCH (e:User) WHERE e.nome = '{}' RETURN e".format(username))
        for u, in g.run("MATCH (e:User) WHERE e.nome = '{}' RETURN e".format(username)):
            print("achei user", u["nome"])
            return u
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
        # virgula da o unpack na tupla de um unico valor
        u1 = User.find(nome1)
        u2 = User.find(nome2)
        if u1 and u2:
            tx = g.begin()
            print("here come the names")
            print(u1)
            print(u2)
            f1 = Relationship(u1, "FRIENDS_WITH", u2)
            f2 = Relationship(u2, "FRIENDS_WITH", u1)
            tx.create(f1)
            tx.create(f2)
            tx.commit()
            return f1, f2
        return False

    def is_friend(nome1,nome2):
        u1 = User.find(nome1)
        u2 = User.find(nome2)
        query = "MATCH (u1:User)-[:FRIENDS_WITH]->(u2:User) where u1.nome = '{}' and u1.nome = '{}' return u1"
        for u, in g.run(query.format(nome1,nome2)):
            return True
        return False

    class Meta:
        managed = True
        db_table = 'user'

class Message(models.Model):
    def send(username, chatname, content):
        c = Chat.find(chatname)
        u = User.find(username)
        if c and u:
            tx = g.begin()
            m = Node("Message", conteudo=content, timestamp=datetime.now())
            e1 = Relationship(u, "SENT", m)
            e2 = Relationship(m, "SENT_IN", c)
            tx.create(m)
            tx.create(e1)
            tx.create(e2)
            tx.commit()
            return m
        return False

    def get_chat_messages(chatname):
        messages = []
        query = "MATCH (u:User)-[:SENT]->(m:Message)-[:SENT_IN]->(c:Chat) WHERE c.nome = '{}' RETURN u, m"
        for u, m in g.run(query.format(chatname)):
            messages.append({"user":u, "message":m})
        return messages

    class Meta:
        managed = True
        db_table = 'messages'


class Chat(models.Model):
    def find(chatname):
        for c, in g.run("MATCH (n:Chat) WHERE n.nome = '{}' RETURN n".format(chatname)):
            print("achei chat", c["name"])
            return c
        return False
    
    def register(chatname):
        if not Chat.find(chatname):
            chat = Node("Chat", nome=chatname)
            tx = g.begin()
            tx.create(chat)
            tx.commit()
            return chat
        return False

    def include_user(username, chatname):
        u = User.find(username)
        c = Chat.find(chatname)
        if u and c and not Chat.user_participates(username, chatname):
            tx = g.begin()
            part = Relationship(u, "PARTICIPATES_IN", c)
            tx.create(part)
            tx.commit()
            return part
        return False

    def user_participates(username, chatname):
        query = "MATCH (u:User)-[:PARTICIPATES_IN]->(c:Chat) where u.nome = '{}' and c.nome = '{}' RETURN u"
        for u, in g.run(query.format(username, chatname)):
            return u
        return False

    def get_user_chats(username):
        query = "MATCH (u:User)-[:PARTICIPATES_IN]->(c:Chat) where u.nome = '{}' RETURN c"
        chatlist = []
        for c, in g.run(query.format(username)):
            chatlist.append(c)
        return chatlist

    def get_participants(chatname):
        query = "MATCH (u:User)-[:PARTICIPATES_IN]->(c:Chat) where c.nome = '{}' RETURN u"
        user_list = []
        print("participantes")
        for u, in g.run(query.format(chatname)):
            print(u)
            user_list.append(u)
        return user_list

    def get_messages(chatname):
        query = "MATCH (u:User)-[:SENT]->(m:Message)-[:SENT_IN]->(c:Chat) where c.nome = '{}' RETURN u, m ORDER BY m.timestamp"
        msg_list = []
        for u, m in g.run(query.format(chatname)):
            msg_list.append({'user':u, 'message':m})
        return msg_list

    class Meta:
        managed = True
        db_table = 'chats'