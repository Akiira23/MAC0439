use FantasyDreams;
DBQuery.shellBatchSize = 100;

// encontra todas as imagens dos torneios de overwatch
db.torneios.find({"esporte":"overwatch"},{"imagens":1, "_id":0}).sort({esporte:1}).pretty();

// encontra os times participantes de partidas que empataram


// encontra os times que venceram pelo menos uma partida em um torneio dado


// encontra todos os jogadores que ja jogaram em uma partida de mais de 2h


// encontra os treinadores de times que já ganharam em menos de 1h20


// encontra os jogadores de mais de 40 anos que ja ganharam uma partida


// encontra todos os jogadores que ja jogaram em uma partida de mais de 2h