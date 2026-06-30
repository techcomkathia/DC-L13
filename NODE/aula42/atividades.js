/* Atividades

1- Crie um arquivo json chamado db.json. Adicione o conteúdo abaixo:*/

const db ={
   "usuarios":[
    {
        "id": "cleitinho",
        "email": "cleitinho@email",
        "senha": "123gato"
    },
    {
        "id": "snow",
        "email": "snow@email",
        "senha": "123gato"
    },
    {
        "id": "sandoval",
        "email": "sandoval@email",
        "senha": "123gato"
    }
   ],
   "produtos" : [
    {
        "id": 1,
        "name": "Notebook Gamer",
        "price": 4500
    },
    {
        "id": 2,
        "name": "Mouse Gamer",
        "price": 150
    },
    {
        "id": 3,
        "name": "Teclado Gamer",
        "price": 250
    }
   ]
}

// crie um servidor que mostre todos os dados do json ao acessar a url http://localhost:3000/
//Dica use o módulo fs para ler o json e o módulo http para criar o servidor


/*
2- crie duas rotas post : /usuarios e /produtos, para criar novos usuarios e produtos respectivamente.
a resposta deverá ser no seguinte formato:
{
"mensagem": "Sucesso ao criar o novo usuario/produto"
"usuarioCriado" : {
    //informações do novo usuario ou produto
},
"status": 200
}
*/


