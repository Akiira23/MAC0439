from django.http import HttpResponse, HttpResponseRedirect
from .models import Aposta, Organizacao, Pertence, Usuario, UsuarioPremium, Projeto
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.db.models import Max, Min, Avg, Count, Sum

def index(request):
    latest_aposta_list = Aposta.objects.order_by('-data_hora')[:10] 
    all_valor = Aposta.objects.values('valor').distinct().order_by('-valor')
    all_times = Aposta.objects.values('aposta_vencedor').distinct().order_by('aposta_vencedor')
    org_list = Organizacao.objects.order_by('nome_org')
    torn_id = Aposta.objects.values('torneio_id').distinct().order_by('torneio_id')
    users = Usuario.objects.raw('SELECT * FROM usuario')
    return render(request, 'aposta/index.html', {'latest_aposta_list': latest_aposta_list, 
        'org_list': org_list, 'all_valor': all_valor, 'all_times': all_times, 'users':users, 'torn_id': torn_id})

def detail(request, id_aposta):
    aposta = get_object_or_404(Aposta, pk=id_aposta)
    return render(request, 'aposta/detail.html', {'aposta': aposta})

def membros(request, id_org):
    org = get_object_or_404(Organizacao, pk=id_org)
    pertence_list = Pertence.objects.order_by('userpremium_id')
    n_membros = Pertence.objects.filter(userorg_id = org.organizacao_id).count()
    usu = Usuario.objects.order_by('user_id')
    return render(request, 'aposta/membros.html', {'org': org, 'pertence_list':pertence_list, 
                    'usu': usu, 'n_membros': n_membros})

def search(request):
    a = request.POST['valor']
    b = request.POST['times']
    if a != "Selecionar" and b != "Selecionar":
        aposta_filter = Aposta.objects.filter(valor = a, aposta_vencedor = b)
    elif a != "Selecionar":
        aposta_filter = Aposta.objects.filter(valor = a)
    elif b != "Selecionar":
        aposta_filter = Aposta.objects.filter(aposta_vencedor = b)
    else:
        return HttpResponse("Its not posible.")
    return render(request, 'aposta/search.html', {'aposta_filter': aposta_filter, 'a': a, 'b': b})

def search_user(request):
    a = request.POST['user']
    if a != "Selecionar":
        id_u = Usuario.objects.all().filter(nome = a)
        for u in id_u:
            u_premium = UsuarioPremium.objects.all().filter(premium = u.user_id)
            projetos = Projeto.objects.all().filter(projeto_user = u.user_id)
            n_projetos = Projeto.objects.all().filter(projeto_user = u.user_id).count()
        aposta_filter = Aposta.objects.order_by('aposta_id')
    else:
        return HttpResponse("Its not posible.")
    return render(request, 'aposta/search_user.html', {'aposta_filter': aposta_filter, 'id_u': id_u, 
                    'u_premium': u_premium, 'projetos': projetos, 'n_projetos': n_projetos})

def search_torneio(request):
    a = request.POST['torneio']
    if a != "Selecionar":
        times = Aposta.objects.values('aposta_vencedor').distinct().filter(torneio_id = a)
        odd_max = Aposta.objects.all().filter(torneio_id = a).aggregate(Max('odd'))
        odd_min = Aposta.objects.all().filter(torneio_id = a).aggregate(Min('odd'))
        mean_bet = Aposta.objects.all().filter(torneio_id = a).aggregate(Avg('valor'))
        qtd_bets = Aposta.objects.filter(torneio_id = a).aggregate(Count('aposta_id'))
        sum_bet = Aposta.objects.all().filter(torneio_id = a).aggregate(Sum('valor'))
        partidas = Aposta.objects.values('partida_id').distinct().filter(torneio_id = a)
    else:
        return HttpResponse("Its not posible.")
    return render(request, 'aposta/search_torneio.html', {'times': times, 'a': a, 
                    'odd_max': odd_max, 'odd_min': odd_min, 'mean_bet': mean_bet, 
                    'qtd_bets': qtd_bets, 'sum_bet': sum_bet, 'partidas': partidas})

def insert_user(request):
    qtd_user = Usuario.objects.aggregate(Count('user_id'))
    qtd_user['user_id__count'] += 1
    sexo = Usuario.objects.values('sexo').distinct()
    return render(request, 'aposta/insert_user.html', {'qtd_user': qtd_user, 'sexo': sexo})

def make_user(request):
    id = request.POST['user_id']
    ddd = request.POST['ddd']
    tel = request.POST['tel']
    cpf = request.POST['cpf']
    saldo = request.POST['saldo']
    senha = request.POST['senha']
    email = request.POST['email']
    nome = request.POST['nome']
    sexo = request.POST['sexo']
    u = Usuario(user_id = id, tel_ddd = ddd, tel_numero = tel, 
        cpf = cpf, saldo = saldo, senha = senha, email = email, nome = nome, sexo = sexo)
    u.save()
    u_create = Usuario.objects.filter(user_id = id)
    return render(request, 'aposta/make_user.html', {'u_create': u_create})

def insert_aposta(request):
    torneio_id = request.POST['tid']
    partida_id = request.POST['pid']
    times = Aposta.objects.values('aposta_vencedor').distinct().filter(torneio_id = torneio_id, partida_id = partida_id)
    qtd_aposta = Aposta.objects.aggregate(Count('aposta_id'))
    qtd_aposta['aposta_id__count'] += 1
    users = Usuario.objects.values('user_id')
    return render(request, 'aposta/insert_aposta.html', {'torneio_id': torneio_id, 'partida_id': partida_id, 
                    'times': times, 'qtd_aposta': qtd_aposta, 'users': users})

def make_aposta(request):
    id = request.POST['aposta_id']
    valor = request.POST['valor']
    time = request.POST['time']
    odd = request.POST['odd']
    data_hora = request.POST['date_time']
    tid = request.POST['tid']
    pid = request.POST['pid']
    uid = request.POST['uid']
    u = Usuario.objects.get(pk=uid)
    a = Aposta(aposta_id = id, valor = valor, aposta_vencedor = time, 
        odd = odd, data_hora = data_hora, partida_id = pid, 
        torneio_id = tid, id_usuario_aposta = u)
    a.save()
    a_create = Aposta.objects.filter(aposta_id = id)
    return render(request, 'aposta/make_aposta.html', {'a_create': a_create})