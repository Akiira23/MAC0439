from django.http import HttpResponse, HttpResponseRedirect
from .models import Aposta, Organizacao, Pertence, Usuario
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

def index(request):
    latest_aposta_list = Aposta.objects.order_by('-data_hora')[:10] 
    all_valor = Aposta.objects.values('valor').distinct().order_by('-valor')
    all_times = Aposta.objects.values('aposta_vencedor').distinct().order_by('aposta_vencedor')
    org_list = Organizacao.objects.order_by('nome_org')
    return render(request, 'aposta/index.html', {'latest_aposta_list': latest_aposta_list, 
        'org_list': org_list, 'all_valor': all_valor, 'all_times': all_times})

def detail(request, id_aposta):
    aposta = get_object_or_404(Aposta, pk=id_aposta)
    return render(request, 'aposta/detail.html', {'aposta': aposta})

def results(request, id_aposta):
    response = "You're looking at the results of bet %s."
    return HttpResponse(response % id_aposta)

def make(request, id_aposta):
    return HttpResponse("You're making a bet %s." % id_aposta)

def membros(request, id_org):
    org = get_object_or_404(Organizacao, pk=id_org)
    pertence_list = Pertence.objects.order_by('userpremium_id')
    usu = Usuario.objects.order_by('user_id')
    return render(request, 'aposta/membros.html', {'org': org, 'pertence_list':pertence_list, 'usu': usu})

def search(request):
    a = request.POST['valor']
    b = request.POST['times']
    if a != "Selecionar":
        aposta_filter = Aposta.objects.filter(valor = a)
    elif b != "Selecionar":
        aposta_filter = Aposta.objects.filter(aposta_vencedor = b)
    elif a != "Selecionar" and b != "Selecionar":
        aposta_filter = Aposta.objects.filter(valor = a, aposta_vencedor = b)
    else:
        return HttpResponse("Its not posible.")
    return render(request, 'aposta/search.html', {'aposta_filter': aposta_filter})

def total(valor, odd):
    return valor*odd