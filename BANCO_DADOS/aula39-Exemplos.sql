use livrarialive13;

-- quantidade de livros por categoria
select categoria_id, count(*) as TOTAL
from livros
group by categoria_id;

-- quantidade de livros por autor
select autor_id as 'Autor', count(*) as 'total de livros por autor'
from livros
group by autor_id;

select * from categorias;
-- quais as categorias distintas dos livros cadastrados 
select distinct categoria_id as categoria 
from livros; 

