use projetosLive06;

-- definição de valores com senha padrão
INSERT INTO users (name, username, email)
VALUES ('Maria','Rh_maria','maria@empresa.com');
-- definição de valores com senha informada 

INSERT INTO users (name, username,password, email)
VALUES ('Paulo', 'Ti_paulo', '123@456', 'paulo@empresa.com');

INSERT INTO users (name, username, email)
VALUES ('Ana', 'Rh_ana',  'ana@empresa.com'),
('Clara', 'Ti_clara',  'clara@empresa.com');

INSERT INTO users (name, username,password, email)
VALUES ('Aparecido', 'Rh_apareci', '55@!cido', 'aparecido@empresa.com');


INSERT INTO projects ( name, description, date)
VALUES ('Refolha', 'Refaturação das folhas', '2014-05-19'),
("Manutenção PC's", "Manutenção PC's", '2014-06-09' ),
('Auditoria', null, '2014-07-09');


INSERT INTO users_has_projects (users_id, projects_id)
VALUES (1,1),
(5,1),
(3,3),
(4,2),
(2,2);

-- -------------------------- EXEMPLOS -------------------------------------
-- comando retorna um erro pois a tabela projetos é referenciada como  chave estrangeira em outra tabela
DROP TABLE projects;

-- a deleção ou atualização não são possíveis (no modo seguro) sem a referência de uma chave
-- primária ou estrangeira
DELETE FROM users WHERE name='Paulo';

-- deleção de uma chave primária que é usada como referência em outra tabela (chave estrangeira)
-- só é possível quando todos os registros que fazem referência a ela são excluídos antes
DELETE FROM projects WHERE id = 1; -- ocasiona erro, pois a chave é usada em users_has_projects

-- excluindo o registro onde ele é chave estrangeira
DELETE FROM users_has_projects where projects_id = 1;

-- para só então excluir onde ele é chave primária
DELETE FROM projects WHERE id = 1;

-- --------------------------------------------------------

UPDATE projects SET date = '2014-09-12'
WHERE id = 2;

UPDATE users set username = 'Rh_cido'
WHERE name = 'Aparecido';

UPDATE users set username = 'Rh_cido'
WHERE id = 5;