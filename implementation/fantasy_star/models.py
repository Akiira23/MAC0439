# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
from django.db import models


class Aposta(models.Model):
    aposta_id = models.IntegerField(primary_key=True)
    venceu_aposta = models.BooleanField(blank=True, null=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    aposta_vencedor = models.CharField(max_length=40)
    odd = models.DecimalField(max_digits=6, decimal_places=2)
    data_hora = models.DateTimeField()
    partida_id = models.IntegerField()
    torneio_id = models.IntegerField()
    id_usuario_aposta = models.ForeignKey('Usuario', models.CASCADE, db_column='id_usuario_aposta')
    aposta_finalizada = models.BooleanField(blank=True, null=True)

    class Meta:
        db_table = 'aposta'


class Organizacao(models.Model):
    organizacao_id = models.IntegerField(primary_key=True, auto_created=True)
    nome_org = models.CharField(max_length=40)
    ceo = models.CharField(max_length=50)

    class Meta:
        db_table = 'organizacao'


class Pertence(models.Model):
    userpremium_id = models.IntegerField(primary_key=True)
    userorg_id = models.IntegerField()

    class Meta:
        db_table = 'pertence'
        unique_together = (('userpremium_id', 'userorg_id'),)


class Projeto(models.Model):
    projeto_user = models.OneToOneField('UsuarioPremium', models.CASCADE, primary_key=True)
    nome_projeto = models.CharField(max_length=40)

    class Meta:
        db_table = 'projeto'
        unique_together = (('projeto_user', 'nome_projeto'),)


class Usuario(models.Model):
    user_id = models.IntegerField(primary_key=True)
    tel_ddd = models.SmallIntegerField()
    tel_numero = models.IntegerField()
    cpf = models.CharField(max_length=11)
    saldo = models.IntegerField()
    senha = models.CharField(max_length=30)
    email = models.CharField(max_length=60)
    nome = models.CharField(unique=True, max_length=80)
    sexo = models.CharField(max_length=1)

    class Meta:
        db_table = 'usuario'


class UsuarioPremium(models.Model):
    premium = models.OneToOneField(Usuario, models.CASCADE, primary_key=True)
    projeto_id = models.IntegerField(unique=True)

    class Meta:
        db_table = 'usuario_premium'
