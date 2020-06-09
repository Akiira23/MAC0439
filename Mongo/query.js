use FantasyDreams;
DBQuery.shellBatchSize = 100;

// encontra todas as imagens dos torneios de overwatch OK
db.torneios.find({"esporte":"overwatch"},{"imagens":1, "_id":0}).sort({esporte:1}).pretty();

// encontra os times participantes de partidas que empataram


// encontra os times que venceram pelo menos uma partida em um torneio dado


// encontra todos os jogadores que ja jogaram em uma partida de mais de 2h30m OK
db.partidas.find({"duracao": /^2h[3-9][0-9]m|^[3-9]h/i},{"duracao":1,"times.treinador":1, "_id":0}).sort({duracao:1}).pretty();

// encontra os treinadores de times que já ganharam em menos de 1h20 OK
db.partidas.find({"duracao": /^0h|^1h[0-1][0-9]m/i},{"duracao":1,"times.treinador":1, "_id":0}).sort({duracao:1}).pretty();

// encontra os jogadores de mais de 40 anos que ja ganharam uma partida
//db.partidas.find({"times.participantes": {$elemMatch: {"idade":40}},{"duracao":1,"times.participantes.nome":1, "times.participantes.idade":1, "_id":0}).sort({duracao:1}).pretty();
//db.jogadores.find({"idade": {$gte:40}},{"idade":1,"times.participantes":1, "_id":0}).sort({duracao:1}).pretty();

// encontra todos os jogadores que ja jogaram em uma partida de mais de 2h OK
db.partidas.find({"duracao":/^[2-9]/i},{"duracao":1,"times.participantes":1, "_id":0}).sort({duracao:1}).pretty();

// encontra todos os jogadores que ja jogaram em uma partida de mais de 3h
