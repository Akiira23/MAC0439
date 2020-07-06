from django.http import HttpResponse
from .models import Aposta
from django.shortcuts import get_object_or_404, render

def index(request):
    latest_aposta_list = Aposta.objects.order_by('-data_hora')[:10]
    context = {'latest_aposta_list': latest_aposta_list}
    return render(request, 'aposta/index.html', context)

def detail(request, id_aposta):
    aposta = get_object_or_404(Aposta, pk=id_aposta)
    return render(request, 'aposta/detail.html', {'aposta': aposta})

def results(request, id_aposta):
    response = "You're looking at the results of bet %s."
    return HttpResponse(response % id_aposta)

def make(request, id_aposta):
    return HttpResponse("You're making a bet %s." % id_aposta)