/* INNER JOIN -  Mostrar apenas dados com correspondência

1) Liste o nome de todos os itens e o nome dos seus respectivos produtores
2) Exiba o número da nota fiscal, data de emissão e o nome dos itens vendidos nela. 
3) Mostre o nome dos produtores e o nome dos itens que eles vendem 

*/
use vendaslive13;

-- 1) Liste o nome de todos os itens e o nome dos seus respectivos produtores
select item.nomeItem, produtor.nomeProdutor
from venda
	inner join item
    on venda.fkItem = item.idItem
    inner join produtor
    on venda.fkprod = produtor.codProd;
    
-- 2) Exiba o número da nota fiscal, data de emissão e o nome dos itens vendidos nela. 

select nf.numeroNf, nf.dataNf, item.nomeItem, venda.quantidade
from venda
	inner join nf
    on venda.fknf = nf.idNf
    inner join item
    on venda.fkItem = item.idItem;
    
-- 3) Mostre o nome dos produtores e o nome dos itens que eles vendem 
select produtor.nomeProdutor, item.nomeItem
from venda
	inner join item
    on venda.fkItem = item.idItem
    inner join produtor
    on venda.fkprod = produtor.codProd;
    
/*
LEFT JOIN - Mostra todos os dados da tabela da esquerda + correspondentes ou NULL

4) Liste todos os itens mostrando o nome do produtor (mesmo que o item ainda não tenha produtor)
5) Mostre o numero da nota fiscal e o nome dos itens vendidos, mas liste também as notas que não tiverem nenhum item vendido
6) Exiba o nome dos produtores e itens que eles produzem, mostrando também que ainda não produzem nenhum item
*/

-- 4) Liste todos os itens mostrando o nome do produtor (mesmo que o item ainda não tenha produtor)
-- tabela item com todos os resultados (nomes) - tabela a esquerda
-- tabela produtor podendo ter valores nulos - tabela a direita
-- testar um item que não tem produtor cadastrado

insert  into item (nomeItem, ValorUnit)
values ('Teste Item2', 10.90);

select item.nomeItem, produtor.nomeProdutor
	from item -- tabela a esquerda
    left join venda 
		on item.idItem = venda.fkItem
	left join produtor
		on produtor.codProd = venda.fkProd;
        
-- 5) Mostre o numero da nota fiscal e o nome dos itens vendidos, 
-- mas liste também as notas que não tiverem nenhum item vendido
insert into nf (numeroNf, dataNf)
values (5060, '2025-06-23');

select nf.numeroNf, item.nomeItem
	from nf
    left join venda
    on nf.idNf = venda.fkNf
    left join item
    on item.idItem =  venda.fkItem;
        
-- 6) Exiba o nome dos produtores e itens que eles produzem, 
-- mostrando também que ainda não produzem nenhum item

insert into produtor (nomeProdutor, endereco, cidade, uf)
values ('Industria Cleitinho', 'Rua dos Gatos', 'Paulista', 'PE');

select produtor.nomeProdutor, item.nomeItem
from produtor -- deve trazer todos os valores
	left join venda
	on venda.fkprod = produtor.codProd
    left join item    
    on venda.fkItem = item.idItem;

