from django import forms
from .models import *


class UserForm(forms.Form):
    nome = forms.CharField()
    email = forms.EmailField(label='Email')

    def clean(self, *args, **kwargs):
        nome = self.cleaned_data.get("nome")
        email = self.cleaned_data.get("email")
        if User.find(nome):
            raise forms.ValidationError("Já existe um usuário com este nome!")
        return nome, email

    
class ChatForm(forms.Form):
    mensagem = forms.CharField()
    convidar = forms.CharField()

    def clean(self, *args, **kwargs):
        mensagem = self.cleaned_data.get("mensagem")
        if mensagem == '':
            raise forms.ValidationError("Escreva uma mensagem!")
        if not User.find(convidar):
            raise forms.ValidationError("Este usuário não existe!")
        return mensagem
