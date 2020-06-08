use FantasyDreams;
DBQuery.shellBatchSize = 400;
db.videos.insertMany([
    {"l":"https://www.youtube.com/watch?v=o8vGaC4OZIs"},
    {"l":"https://www.youtube.com/watch?v=Nrst1nnFpDU"},
    {"l":"https://www.youtube.com/watch?v=T3IfK2I7SOg"},
    {"l":"https://www.youtube.com/watch?v=DrPyUcNo1HI"}
]
);
// faz a ligação dos torneios com os videos
db.torneios.update({"esporte":"league of legends"}, {$set:{"imagens":[
    {"l":"https://www.youtube.com/watch?v=o8vGaC4OZIs"}
]}});
db.torneios.update({"esporte":"futebol americano"}, {$set:{"imagens":[
    {"l":"https://www.youtube.com/watch?v=Nrst1nnFpDU"}
]}});
db.torneios.update({"esporte":"hockey"}, {$set:{"imagens":[
    {"l":"https://www.youtube.com/watch?v=T3IfK2I7SOg"}
]}});
db.torneios.update({"esporte":"overwatch"}, {$set:{"imagens":[
    {"l":"https://www.youtube.com/watch?v=DrPyUcNo1HI"}
]}});