/*Deleta uma relacao de um usuario premium com uma organizacao*/
DELETE FROM pertence
WHERE userpremium_id = 12 AND userorg_id = 2;

/*Deleta um projeto de um usuario*/
DELETE FROM projeto
WHERE projeto_user_id = 2 AND nome_projeto = 'Vem no x1';

/*Remove apostas que ocorreram antes de 2020 e seus saldos foram atualizados*/
DELETE FROM aposta
WHERE data_hora < '2020-01-01 00:00:00.000' AND aposta_finalizada = TRUE;

/*Remove apostas que foram encerradas*/
DELETE FROM aposta
WHERE aposta_finalizada = TRUE;

/*Remove um usuario dado sua senha*/
DELETE FROM usuario
WHERE user_id = 22 AND senha = 'GqnQzTjAPb';

/*Limpa todas as tabelas*/
DELETE FROM aposta;
DELETE FROM organizacao;
DELETE FROM pertence;
DELETE FROM projeto;
DELETE FROM usuario;
DELETE FROM usuario_premium;