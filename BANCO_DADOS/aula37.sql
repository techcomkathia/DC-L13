-- Linguagem DDL : definição da estrutura

-- comando para criação de um banco é: create databese nomeBanco.

create database if not exists aula2Live13;
use aula2Live13;

create table if not exists tabela1(
	id_tabela1 int auto_increment primary key ,
    nome varchar(100) not null, 
    uf char(2),
    data_nasc date not null,
    cpf char(11) not null unique    
);

create table if not exists tabela2(
	id_tabela2 int auto_increment primary key,
    nome varchar(20) not null
 );
 
-- tabela com chave estrangeira
create table if not exists tabela3(
	id_tabela3 int auto_increment primary key,
    coluna varchar(20) not null,
    -- coluna das chaves estrangeiras
    tabela2_id int not null, -- relacionamento obrigatório cardinalidade 1,n
    tabela1_id int,  -- relacionamento opcional cardinalidade 0,n 
    -- configuração das chaves estrangeiras
    -- foreign key (coluna dessa tabela) references outraTabela (coluna da outra tabela)
    foreign key (tabela2_id) references tabela2 (id_tabela2),
    foreign key (tabela1_id) references tabela1 (id_tabela1)
);


-- ATIVIDADE 1 : crie um banco de dados chamado livraria 
-- Crie 2 tabelas: autores e categorias (todas as colunas 
-- precisam ter dados informados, ou seja não poderão ser nulas)

