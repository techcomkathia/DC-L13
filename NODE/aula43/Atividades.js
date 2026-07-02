/* 1ª Atividade:
Crie um rota principal que retorne uma mensagem de boas vindas, os recursos disponíveis na API e a data atual.
Exemplo de resposta:
{
    "mensagem": "Olá, seja bem-vindo a nossa API!",
    "recursos": [
        {
            "rota": "/funcionarios",
            "metodo": "GET",
            "descricao": "Retorna uma lista de funcionários"
        },
        {
            "rota": "/produtos",
            "metodo": "GET",
            "descricao": "Retorna uma lista de produtos"
        },
        {
            "rota": "/unidades",
            "metodo": "GET",
            "descricao": "Retorna a lista das nossas X unidades" //utilizar o comprimento do array de unidades para informar a quantidade de unidades
        }
    ],
    "data": "2023-03-15T10:30:00Z"
}

Depois crie uma rota para cada recurso disponível na API, retornando os dados correspondentes.

DICA: use o módulo fs para ler os arquivos JSON e retornar os dados para o cliente.Use o método readFileSync para ler os arquivos de forma síncrona, e o método JSON.parse para converter o conteúdo do arquivo em um objeto JavaScript.
*/