from django.db import models
from py2neo import Graph, Node, Relationship, Database


g = Graph(uri="bolt://localhost:7687", password="123", name="Chat")

# Create your models here.
class User(models.Model):
    # app_label = "User"
    user_id = models.IntegerField(primary_key=True)
    # tel_ddd = models.SmallIntegerField()
    # tel_numero = models.IntegerField()
    # cpf = models.CharField(max_length=11)
    # saldo = models.IntegerField()
    # senha = models.CharField(max_length=30)
    email = models.CharField(max_length=60)
    nome = models.CharField(unique=True, max_length=80)
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
            return True
        return False

    class Meta:
        managed = True
        db_table = 'username'