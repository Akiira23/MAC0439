use FantasyDreams;
DBQuery.shellBatchSize = 100;

// encontra todas as imagens dos torneios de overwatch
db.torneios.find({"esporte":"overwatch"},{"imagens":1, "_id":0}).sort({esporte:1}).pretty();

// encontra todas os times com mulheres como treinadoras
db.times.find({"treinador.genero":"feminino"},{"nome":1, "_id":0}).pretty();
