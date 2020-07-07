from django.db import models
from py2neo import Graph, Node, Relationship


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
        user = g.nodes.match("User", nome = username).first()
        # user = g.nodes.match("User", name=username)
        return user

    def register(self, username, email):
        print("A"*40)
        if not User.find(username):
            
            user = Node("User", username=username, email=email)
            tx = g.begin()
            tx.create(user)
            tx.commit()
            return True
        return False

    class Meta:
        managed = True
        db_table = 'username'