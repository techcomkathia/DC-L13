use vendasLive13;

/*- SELECT
- Liste todos os dados da tabela ITEM
- Liste apenas o nome dos produtores*/

select * from item;
select nomeProdutor	as 'Nomes produtores' from produtor;

/*- SELECT com WHERE
- Liste o nome e o valor unitário dos itens cujo o valor unitário seja maior que 50 reais
- Mostre o nome de todos os produtores que estejam na cidade de Fortaleza
- Exiba o número da nota e a data de emissão das notas fiscais emitidas no dia 
(definir dia cadastrado no banco)*/

select 
	nomeItem as 'Nome', 
    valorUnit as 'Preço unitário'
from item
where valorUnit > 50;

select 
	nomeProdutor
from produtor
where cidade = 'Fortaleza';

-- select para verificar as datas disponíveis para verficação
-- select * from nf; 
select 
	numeroNf as 'Número',
    dataNf as 'Data de emissão'
from nf
where dataNf = '2025-02-18';

-- ----------- Exemplos limit e order by-------------------------------------
-- LIMIT
-- limitando apenas aos 5 primeiros resultados gerais
select * from venda
limit 5;

-- limitando aos 5 primeiras vendas do produtor 2
select * from venda
where fkProd = 2
limit 5;

-- ORDER BY
-- ordenação da maior quantidade de itens vendidos a menor
select * from venda
order by quantidade desc;

-- ordenacao do menor desconto ao maior
select * from venda
order by desconto asc;


/*- SELECT com Limit
- Mostre os 3 primeiros itens da tabela item
- Liste os 2 primeiros produtores cadastrados na cidade de Fortaleza

- SELECT com ORDER BY
- Liste o nome e o valor unitário dos itens ordenados do mais caro para o mais barato
- Exiba os nomes dos produtores ordenados por ordem alfabética pela cidade*/

select * from item 
limit 3;

select * from produtor 
where cidade = 'Fortaleza'
limit 2;

select  nomeItem, valorUnit from item
order by valorUnit desc;

select nomeProdutor, cidade from produtor
order by cidade asc;

/*- SELECT com GROUP BY
- Conte o quantos tipos de produtos foram vendidos por nota fiscal 
- Conte quantas vendas cada produtor participou 

- SELECT com DISTINCT 
- Liste todas as cidades únicas onde há produtores
- Mostre todos os percentuais de desconto diferentes aplicados nas vendas
*/
select 
	fkNf,
	count( distinct fkItem) as 'tipos de produtos'
    from venda
group by fkNf; 


select  fkProd,
		count(*) as 'quantidade de vendas'
        from venda
group by fkProd;

select distinct desconto from venda;
-- ordenando os descontos
select distinct desconto 
	from venda
    order by desconto desc;
    
select distinct cidade 
	from produtor;
