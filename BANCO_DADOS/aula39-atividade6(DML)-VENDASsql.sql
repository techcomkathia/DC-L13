use vendasLive13;

-- 4)  Faça as seguintes mudanças:

-- 4.1 Atualize o valor do produto com código 5 para 2 reais a menos
update item set valorUnit = valorUnit - 2
where idItem = 5;

-- 4.2 Adicione as colunas de endereço na tabela produtor (endereço, cidade, UF)
-- utiliza os comandos da linguagem DDL pois atualiza a estrutura da tabela
alter table produtor add column endereco varchar(100) not null;
alter table produtor add column cidade varchar(50) not null;
alter table produtor add column uf char(2) not null;

-- 4.3 Atualize cada um dos endereços
/*
- **codProd = 1** → Dell Technologies — Av. das Nações Unidas, 12901 — São Paulo/SP
- **codProd = 2** → Logitech International — Rua Gomes de Carvalho, 1609 — São Paulo/SP
- **codProd = 3** → Redragon Brasil — Av. Paulista, 2000 — São Paulo/SP
- **codProd = 4** → Samsung Electronics — Av. Presidente Vargas, 620 — Rio de Janeiro/RJ
- **codProd = 5** → HyperX Gaming — Rua das Palmeiras, 50 — Campinas/SP
*/
update produtor set endereco= 'Av. das Nações Unidas,12901', cidade = 'São Paulo', uf= 'SP'
where codProd = 1;

update produtor set endereco= 'Rua Gomes de Carvalho, 1609', cidade = 'São Paulo', uf= 'SP'
where codProd = 2;

update produtor set endereco= ' Av. Paulista, 2000', cidade = 'São Paulo', uf= 'SP'
where codProd = 3;

update produtor set endereco= ' Av. Presidente Vargas, 620', cidade = 'Rio de Janeiro', uf= 'RJ'
where codProd = 4;

update produtor set endereco= ' Rua das Palmeiras, 50 ', cidade = 'Campinas', uf= 'SP'
where codProd = 5;

-- Para o ITEM 3 da NF 3 adicione um desconto de 10%
update venda set desconto = 10 
where fkItem = 3 and fkNf = 3;

-- Para a Nf 1 adicione um desconto de 30% para itens com uma quantidade maior que 2
update venda set desconto = 100
where fkNf = 1 and quantidade >= 4;

-- -----------------DQL------------------
-- Comando SELECT
-- selecionando todos os campos da tabela
select * from produtor;

-- selecionando campos específicos
select codProd, nomeProdutor, uf from produtor;

-- selecionando campos específicos com apelidos 
select 
	codProd as 'id Fornecedor' , 
    nomeProdutor as 'Nome Fornecedor', 
    uf as 'Estado' 
from produtor;

-- selecionar um fornecedor específico com colunas indicadas
select 
	codProd as 'id Fornecedor' , 
    nomeProdutor as 'Nome Fornecedor', 
    uf as 'Estado' 
from produtor
where codProd = 1;

-- selecionar informações com base em uma coluna que não é fk ou pk
select 
	codProd as 'id Fornecedor' , 
    nomeProdutor as 'Nome Fornecedor', 
    uf as 'Estado' 
from produtor
where uf = 'SP' or uf = 'rj';





