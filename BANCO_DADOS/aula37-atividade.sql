-- Atividade DDL
-- Etapa 1 
create database if not exists livrariaLive13;

use livrariaLive13;

-- TABELA autores: id, nome, nacionalidade
create table if not exists autores (
	id_autor int auto_increment primary key,
    nome varchar(100) not null,
    nacionalidade varchar(50) not null
);

-- TABELA categorias : id, nome
create table if not exists categorias(
	id_categoria  int auto_increment primary key,
    nome varchar(50) not null
);

-- TABELA livros : id, titulo, ano_publicacao, preco, autor_id, categoria_id
create table if not exists livros (
	id int auto_increment primary key,
    titulo varchar(100) not null,
    ano_publicacao int,
    preco decimal(10,2),
    autor_id int not null,
    categoria_id int not null,
    foreign key (autor_id) references autores (id_autor),
    foreign key (categoria_id) references categorias (id_categoria)
);

