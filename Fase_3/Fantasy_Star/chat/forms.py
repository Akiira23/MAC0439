from django import forms
from .models import *


class UserForm(forms.Form):
    nome = forms.CharField()
    email = forms.EmailField(label='Email')

    def clean(self, *args, **kwargs):
        nome = self.cleaned_data.get("nome")
        email = self.cleaned_data.get("email")
        if User.find(nome):
            raise forms.ValidationError("FUDEU")
            raise forms.ValidationError("Já existe um usuário com este nome!")
        return nome, email

    
