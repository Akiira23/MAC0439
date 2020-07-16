from django.contrib import admin

from .models import Usuario, Aposta, UsuarioPremium, Organizacao, Pertence, Projeto

admin.site.register(Usuario)
admin.site.register(Aposta)
admin.site.register(UsuarioPremium)
admin.site.register(Organizacao)
admin.site.register(Pertence)
admin.site.register(Projeto)