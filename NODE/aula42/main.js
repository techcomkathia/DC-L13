//importar o módulo http
const http = require('http');

const banco = {
    frutas: [
        {id: 1, name: 'banana', price: 2.00},
        {id: 2, name: 'maca', price: 3.00},
        {id: 3, name: 'laranja', price: 4.00 }
    ],
    legumes: [
        {id: 10, name: 'cenoura', price: 2.00},
        {id: 20, name: 'batata', price: 3.00}
    ]
}

const servidor =  http.createServer((req, res) => {
    //configurar o tipo de conteúdo a ser devolvido
    //primeiro parâmetro o código de status, segundo parâmetro um objeto com o cabeçalho do tipo da resposta
    res.writeHead(200, {'Content-Type': 'application/json'});
    //identificar rotas diferentes
    const url = req.url;
    if(req.method == 'GET'){
        switch(url){
        case '/':
            res.end(JSON.stringify({
                mensagem: 'Bem-vindo a minha API de frutas',
                frutas: banco.frutas.length,
                legumes: banco.legumes.length,
                versao: '1.0.0',
                autor: 'Cleitinho'
            }));
            return
            
        case '/frutas':
            res.end(JSON.stringify(banco.frutas));
            return
            
        case '/legumes':
            res.end(JSON.stringify(banco.legumes));
            return
        default:
            res.end('Nenhuma rota encontrada');
            return
        }

    }
    //rota para adicionar frutas
    else if(req.method == 'POST' && url == '/frutas'){
        //adicionando o conteúdo da requisição aos dados do banco
        req.on('data', (dadosReq) =>{
            const dados = JSON.parse(dadosReq)// convertendo o conteúdo da requisição em um objeto
            banco.frutas.push({...dados, id: banco.frutas.length + 1}) //destruturando o array que vem da requisição e adicionando ao array de frutas do banco
            console.log(banco.frutas)
        })
        // quando a requisição acabar mostrar o novo estado do banco
        req.on('end', () => {
            res.end(JSON.stringify({
              mensagem: 'Fruta adicionada com sucesso',
              frutas:banco.frutas
            })); //resposta do servidor enviamos o 'NOVO' estado do banco com os dados
        })
       
        return
    }
    //demais rotas e metodos
    else{
        res.end('Nenhuma rota encontrada para esse método');
        return
    }

    //finalizando a requisição
   ;
})

//iniciar o servidor
servidor.listen(3000, () => {
    console.log('servidor rodando na porta 3000. Acesse no navegador http://localhost:3000 para requisições do tipo GET');
})