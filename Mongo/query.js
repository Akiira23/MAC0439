use FantasyDreams;
DBQuery.shellBatchSize = 100;

// encontra todas as imagens dos torneios de overwatch OK
db.torneios.find({"esporte":"overwatch"},{"imagens":1, "_id":0}).sort({esporte:1}).pretty();

// encontra os times participantes de partidas que empataram OK
db.partidas.aggregate([
    {$project: {times: 1, placar_str: {$split: ["$placar", "-"]}}},
    {$project: {time_1: {$arrayElemAt: ["$times", 0]}, time_2: {$arrayElemAt: ["$times", 1]}, pontos_1: {$arrayElemAt: ["$placar_str", 0]}, pontos_2: {$arrayElemAt: ["$placar_str", 1]}}},
    {$project: {resp: {$eq: ["$pontos_1", "$pontos_2"]}, nome_time_1: "$time_1.nome", nome_time_2: "$time_2.nome", _id: 0}},
    {$match: {resp: true}}, 
    {$project: {resp: 0}},
    ]);

// encontra os times que venceram pelo menos uma partida em um torneio dado OK
db.torneios.aggregate([
    {$match: {nome: "Exploding EVO"}},
    {$unwind: {path: "$partidas",}},
    {$project: {"partidas.times": 1, placar_str: {$split: ["$partidas.placar", "-"]}}},
    {$project: {time_1: {$arrayElemAt: ["$partidas.times", 0]}, time_2: {$arrayElemAt: ["$partidas.times", 1]}, pontos_1: {$arrayElemAt: ["$placar_str", 0]}, pontos_2: {$arrayElemAt: ["$placar_str", 1]}}},
    {$project: {resp: {$gt: ["$pontos_1", "$pontos_2"]}, nome_time_1: "$time_1.nome", nome_time_2: "$time_2.nome", _id: 0}},
    {$project: {time: {$cond: {if: {$eq: ["$resp", true]}, then: {time: "$nome_time_1"}, else: {time: "$nome_time_2"}}}}},
    {$project: {time_vitorioso: "$time.time"}}
]);


// encontra todos os jogadores que ja jogaram em uma partida de mais de 2h30m OK
db.partidas.find({"duracao": /^2h[3-9][0-9]m|^[3-9]h/i},{"duracao":1,"times.treinador":1, "_id":0}).sort({duracao:1}).pretty();


// encontra os treinadores de times que já ganharam em menos de 1h20 OK
db.partidas.find({"duracao": /^0h|^1h[0-1][0-9]m/i},{"duracao":1,"times.treinador":1, "_id":0}).sort({duracao:1}).pretty();


// encontra todos os jogadores que ja jogaram em uma partida de mais de 2h OK
db.partidas.find({"duracao":/^[2-9]/i},{"duracao":1,"times.participantes":1, "_id":0}).sort({duracao:1}).pretty();




