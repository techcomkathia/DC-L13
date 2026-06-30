USE livrarialive13;

select * from livros;
select * from categorias;
-- select com inner join

select livros.id, livros.titulo, livros.ano_publicacao,
livros.preco,livros.preco *0.9 as 'preco_desconto(10%)',
livros.preco - 10 as desconto_fixo, -- coluna calculada com o valor com 10% de desconto
autores.nome , autores.nacionalidade, categorias.nome
from livros
inner join autores 
	on livros.autor_id = autores.id_autor
inner join categorias
	on livros.categoria_id = categorias.id_categoria;
    
-- ------------------ LEFT JOIN (retorna valores nulos a direita)-----------

use livrariaLive13;
-- selecionar todas as categorias com seus livros
select livros.titulo, categorias.nome
	from categorias -- tabela a esquerda ( todos os valores)
    left join livros -- tabela a direita ( pode ter null)
    on livros.categoria_id = categorias.id_categoria;
    
-- ---------- Cálculo de média de preço dos livros por categoria (AVG)----------------
select categorias.nome as categora_nome, avg(livros.preco)
	from categorias -- tabela a esquerda ( todos os valores)
    inner join livros -- tabela a direita ( pode ter null)
    on livros.categoria_id = categorias.id_categoria
    group by categorias.nome;
    
-- mostrar quantos livros existem por categoria incluindo categorias que não tem livros
select categorias.nome, count(livros.id) as 'contagem'
	from categorias -- tabela a esquerda ( todos os valores)
    left join livros -- tabela a direita ( pode ter null)
    on livros.categoria_id = categorias.id_categoria
    group by categorias.nome;
    
    
select categorias.nome, count(livros.id) as 'contagem'
	from categorias -- tabela a esquerda ( todos os valores)
    left join livros -- tabela a direita ( pode ter null)
    on livros.categoria_id = categorias.id_categoria 
    group by categorias.nome;

    

    
