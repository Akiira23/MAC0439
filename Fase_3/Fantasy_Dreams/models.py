# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
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
    id_usuario_aposta = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usuario_aposta')
    aposta_finalizada = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'aposta'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Organizacao(models.Model):
    organizacao_id = models.IntegerField(primary_key=True)
    nome_org = models.CharField(max_length=40)
    ceo = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'organizacao'


class Pertence(models.Model):
    userpremium_id = models.IntegerField(primary_key=True)
    userorg_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'pertence'
        unique_together = (('userpremium_id', 'userorg_id'),)


class Projeto(models.Model):
    projeto_user = models.OneToOneField('UsuarioPremium', models.DO_NOTHING, primary_key=True)
    nome_projeto = models.CharField(max_length=40)

    class Meta:
        managed = False
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
        managed = False
        db_table = 'usuario'


class UsuarioPremium(models.Model):
    premium = models.OneToOneField(Usuario, models.DO_NOTHING, primary_key=True)
    projeto_id = models.IntegerField(unique=True)

    class Meta:
        managed = False
        db_table = 'usuario_premium'
