# Atividade Prática -- API REST com Express

## Objetivo

Nesta atividade, você deverá desenvolver uma **API REST utilizando
Node.js e Express** para disponibilizar os dados contidos no arquivo
`db.json`.

A API deverá permitir consultas aos dados da escola por meio de
diferentes rotas, utilizando:

-   Rota raiz (`/`);
-   Rotas para listagem de recursos;
-   Parâmetros de rota (`req.params`);
-   Parâmetros de consulta (`req.query`).

------------------------------------------------------------------------

## Banco de Dados

Utilize o arquivo **db.json** disponibilizado, trazendo os dados para a aplicação com o módulo fs.

Coleções disponíveis:

-   alunos
-   professores
-   cursos
-   unidades

------------------------------------------------------------------------

# Parte 1 -- Rotas Básicas

## 1. Página inicial

`GET /`

Retorne uma mensagem informando que a API está funcionando, o objetivo da api e as rotas possíveis.

## 2. Listar alunos

`GET /alunos`

## 3. Listar professores

`GET /professores`

## 4. Listar cursos

`GET /cursos`

## 5. Listar unidades

`GET /unidades`

------------------------------------------------------------------------

# Parte 2 -- Parâmetros de Rota

## 6. Buscar aluno pelo ID

`GET /alunos/:id`

## 7. Buscar professor pelo ID

`GET /professores/:id`

## 8. Buscar curso pelo ID

`GET /cursos/:id`

## 9. Buscar unidade pelo ID

`GET /unidades/:id`

Caso o registro não exista, retorne uma mensagem de erro apropriada.

------------------------------------------------------------------------

# Parte 3 -- Parâmetros de Consulta

## 10. Permitir uma busca de alunos por curso e ou por nome

`GET /alunos?curso=Python`

`GET /alunos?nome=Maria`

`GET /alunos?nome=Maria&curso=Python`

Utilize `includes()` para realizar a busca.

## 11. Buscar professores por titulação

`GET /professores?titulacao=Mestre`

## 12. Buscar unidades por nome

`GET /unidades?nome=Centro`

## 13. Buscar cursos por duração

`GET /cursos?duracao=2 anos`

------------------------------------------------------------------------

# Parte 4 -- DESAFIO : Rotas Especiais

## 14. Listar disciplinas de um aluno

`GET /alunos/:id/disciplinas`

Retorne apenas o array de disciplinas.

## 15. Filtrar disciplinas por status

`GET /alunos/:id/disciplinas?status=cursando`

ou

`GET /alunos/:id/disciplinas?status=cursada`

# Estrutura do Projeto

``` text
projeto-escola/
│
├── dbEscola.json
├── package.json
├── server.js
```

------------------------------------------------------------------------

# Requisitos

-   Utilizar Express;
-   Utilizar Módulo FS;
-   Utilizar `req.params`;
-   Utilizar `req.query`;
-   Utilizar `res.json()`;
-   Tratar casos de erro;
-   Organizar o código.

------------------------------------------------------------------------

# Atividade aula 44

## Rotas POST

### Crie uma rota para criar um aluno 
 Método POST com validação dos atributos obrigatórios: 

Body esperado na requisição
```json

 {
      "email": "aluno1@escola.com",
      "senha": "123456",
      "nome": "Aluno 1",
      "endereco": "Rua 1, 10",
      "telefone": "(85)99999-1001",
      "curso": "Desenvolvimento Web",
      "disciplinasCursadas": [
        {
          "nomeDisciplina": "JavaScript",
          "professor": "Ana Souza",
          "notas": [
            null,
            null,
            null
          ],
          "status": "cursando"
        }]
}

```

mensagem de sucesso :

```json
{
  "mensagem": "sucesso, aluno criado",
  "Status": 201
}

```

mensagem de erro :

```json
{
  "mensagem": "erro ao criar aluno ",
  "Status": 400,
  "erro": "ausência dos atributos obrigatórios: listar atributos aqui"
}

```
