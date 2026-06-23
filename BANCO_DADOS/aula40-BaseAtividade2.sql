CREATE DATABASE loja_live13;
USE loja_escola;

-- Clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(100)
);

-- Categorias
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_pedido DATE,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Itens do pedido
CREATE TABLE itens_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- insert de dados
INSERT INTO categorias (nome) VALUES
('Informática'),
('Periféricos'),
('Escritório'),
('Games'),
('Papelaria');

INSERT INTO clientes (nome, cidade) VALUES
('Ana Souza', 'Fortaleza'),
('Carlos Lima', 'Recife'),
('Marina Alves', 'Natal'),
('Pedro Santos', 'Fortaleza'),
('Juliana Costa', 'Maceió'),
('Lucas Rocha', 'João Pessoa'),
('Luciana Rocha', 'João Pessoa'),
('Débora Rocha', 'João Pessoa')
;

INSERT INTO produtos (nome, preco, categoria_id) VALUES
('Notebook', 3500.00, 1),
('Mouse', 80.00, 2),
('Teclado', 150.00, 2),
('Monitor', 1200.00, 1),
('Cadeira Gamer', 950.00, 4),
('Impressora', 700.00, 3),
('Headset', 250.00, 4),
('Webcam', 180.00, 2),
('Fax', 100.00, 3)
;

INSERT INTO pedidos (data_pedido, cliente_id) VALUES
('2026-05-01', 1),
('2026-05-03', 2),
('2026-05-05', 1),
('2026-05-06', 3),
('2026-05-10', 5),
('2026-05-11', 2),
('2026-05-15', 4);


INSERT INTO itens_pedido (pedido_id, produto_id, quantidade) VALUES
(1, 1, 1),(1, 2, 2),
(2, 3, 1),(2, 4, 1),
(3, 2, 3),(3, 8, 1),
(4, 5, 1),(4, 7, 2),
(5, 6, 1),(5, 3, 2),
(6, 1, 1),(6, 7, 1),
(7, 2, 1),(7, 3, 1),(7, 8, 2);

/*Exercício 1 - Coluna Calculada
Liste o nome dos produtos, o preço unitário e o preço com aumento de 10%.
Colunas desejadas: nome, preco, preco_com_aumento

Exercício 2 - SUM
Calcule o valor total do estoque fictício considerando que existem 10 unidades 
de cada produto.
Dica: multiplicar preço por 10 antes de somar.

Exercício 3 - AVG, MIN e MAX
Exiba: preço médio dos produtos, menor preço, maior preço

Exercício 4 - COUNT
Conte: 
a) Quantos clientes existem cadastrados.
b) Quantos pedidos foram realizados.
c) Quantos produtos existem cadastrados.

Exercício 5 - GROUP BY
Mostre quantos pedidos cada cliente realizou.
Resultado esperado: Cliente - Quantidade de Pedidos*/