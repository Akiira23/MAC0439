use FantasyDreams;
DBQuery.shellBatchSize = 400;
db.imagens.insertMany([
    {"l":"https://i.imgur.com/4LPe2Bz.png"},
    {"l":"https://i.imgur.com/4LPe2Bz.png"},
    {"l":"https://i.imgur.com/eUUWXv3.png"},
    {"l":"https://i.imgur.com/6Rp19GV.png"},
    {"l":"https://i.imgur.com/bnjmRfB.png"},
    {"l":"https://i.imgur.com/g0LjUj7.jpg"},
    {"l":"https://i.imgur.com/ZQ0bxzx.png"}
]
);
// faz a ligação dos torneios com as imagens
db.torneios.update({"esporte":"overwatch"}, {$set:{"imagens":[
    {"l":"https://i.imgur.com/4LPe2Bz.png"},
    {"l":"https://i.imgur.com/4LPe2Bz.png"}
]}});
db.torneios.update({"esporte":"hockey"}, {$set:{"imagens":[
    {"l":"https://i.imgur.com/eUUWXv3.png"},
    {"l":"https://i.imgur.com/6Rp19GV.png"},
    {"l":"https://i.imgur.com/bnjmRfB.png"}
]}});
db.torneios.update({"esporte":"volei"}, {$set:{"imagens":[
    {"l":"https://i.imgur.com/g0LjUj7.jpg"},
    {"l":"https://i.imgur.com/ZQ0bxzx.png"}
]}});