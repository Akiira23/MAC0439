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

    
class ChatPage(forms.Form):
    mensagem = forms.CharField(label='')

    def clean(self, *args, **kwargs):
        mensagem = self.cleaned_data.get("mensagem")
        if mensagem == '':
            raise forms.ValidationError("Escreva uma mensagem!")
        return mensagem

class ChatForm(forms.Form):
    nome = forms.CharField(label='')

    def clean(self, *args, **kwargs):
        nome = self.cleaned_data.get("nome")
        if nome == '':
            raise forms.ValidationError("Escreva um nome para o chat!")
        return nome

class InviteForm(forms.Form):
    nome = forms.CharField(label='')

    def clean(self, *args, **kwargs):
        nome = self.cleaned_data.get("nome")
        if not User.find(nome):
            raise forms.ValidationError("Este usuário não existe!")
        return nome

class FriendForm(forms.Form):
    nome = forms.CharField(label='')

    def clean(self, *args, **kwargs):
        friend = self.cleaned_data.get("nome")
        if not User.find(friend):
            raise forms.ValidationError("Este usuário não existe!")
        return friend