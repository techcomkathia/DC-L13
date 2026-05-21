# Criação da API local com Json Server
## Instalação da biblioteca
```
npm install json-server
```

## Criação do arquivo db.json
Crie um arquivo com a extensão json, que servirá como nosso banco de dados. Cada atributo será convertido para um endpoint ex.:
```
{
  "products": [
    {
      "id": 1,
      "name": "Notebook Gamer",
      "price": 4500
    },
    {
      "id": 2,
      "name": "Mouse Gamer",
      "price": 150
    }
  ],
  "users": [
    {"id": "cleitinho",
     "email": "cleitinho@email",
     "senha": "123gato"
    
    }
  ]
}
```
## Iniciando o servidor
Para iniciar o servidor é necessário configurar o arquivo package.json, incluindo o script para execução do servidor local da api:
```
{
  "dependencies": {
    "json-server": "^1.0.0-beta.15"
  },
  "scripts": {
  "server": "json-server --watch db.json --port 3001"
}
}
```
Após a configuração do package.json execute no terminal , na raiz da pasta onde está o arquivo db.json o comando
```
npm run server
```