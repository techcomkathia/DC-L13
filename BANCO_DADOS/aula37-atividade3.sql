/*  No banco de dados Livraria (livrariaLive13), altere a tabela autores para adiconar 
uma nova coluna chamada data_nascimento.
 O formato dessa nova coluna será date. O auto incremento do id dos livros deve 
 iniciar em 2000 e dos categorias em 110.   
 */

use livrariaLive13;
alter table autores_mudei add data_nascimento date not null; 
alter table livros auto_increment = 200;
alter table categorias auto_increment= 110;

/*
Mude o tipo de dado da tabela projects na coluna date (do banco de dados da ATIVIDADE 2)
para DATE, mude o valor padrão para as senhas da tabela users para 123mudar  */

use projetoslive06;
alter table projects modify column date date;
alter table users modify column password varchar(45) default '123mudar' not null;


