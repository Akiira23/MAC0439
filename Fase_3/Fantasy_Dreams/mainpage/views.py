from django.shortcuts import get_object_or_404, render, redirect
# from .models import *
from django.http import HttpResponse


def index(request):
    context = {}
    return render(request, 'mainpage/index.html', context)