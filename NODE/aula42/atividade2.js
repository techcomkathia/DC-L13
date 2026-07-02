// requisição dos módulos
const http = require('http');
const fs = require('fs');

//dados do banco db
const dadosBanco = fs.readFileSync('db.json', 'utf-8');
const dadosBancoObj = JSON.parse(dadosBanco) //convertendo o conteúdo do banco em objeto para manipulação

//criação do servidor 
const servidor = http.createServer((req, res) => {
    if(req.method == 'GET'){
        if(req.url == '/'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({
                mensagem: 'Bem-vindo a minha API ',
                usuarios: dadosBancoObj.usuarios.length,
                produtos: dadosBancoObj.produtos.length,
            })); // já está no formato json, por isso não é necessário converter
            res.end(); //finaliza a requisição
        }
        else if(req.url == '/usuarios'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(dadosBancoObj.usuarios));
            res.end();
        }
        else if(req.url == '/produtos'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(dadosBancoObj.produtos));
            res.end();
        }
        else{
            res.end('Nenhuma rota encontrada');
        }
    }
    else if (req.method == 'POST'){
        if(req.url == '/usuarios'){
            //captar os dados da requisição
            req.on('data', (dadosReq) => {
                //converter o conteúdo da requisição para obj
                const dadosReqObj = JSON.parse(dadosReq)

                //adicionar o conteúdo da requisição ao banco de dados
                dadosBancoObj.usuarios.push({...dadosReqObj, id: dadosBancoObj.usuarios.length + 1})
                //persistencia dos dados no banco
                fs.writeFileSync('db.json', JSON.stringify(dadosBancoObj)) //convertendo o objeto para json e salvando no banco
                console.log(dadosBancoObj.usuarios)
            })
            //retornar uma resposta para o cliente
            req.on('end', () => {
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({
                    mensagem: 'Usuario adicionado com sucesso',
                    totalUsuarios: dadosBancoObj.usuarios.length
                }))
            })
        }
        else if (req.url == '/produtos'){
            //captar os dados da requisição
            req.on('data', (dadosReq) => {
                //converter o conteúdo da requisição para obj
                const dadosReqObj = JSON.parse(dadosReq)

                //adicionar o conteúdo da requisição ao banco de dados
                dadosBancoObj.produtos.push({...dadosReqObj, id: dadosBancoObj.produtos.length + 1})
                //persistencia dos dados no banco                
                fs.writeFileSync('db.json', JSON.stringify(dadosBancoObj)) //convertendo o objeto para json e salvando no banco
                console.log(dadosBancoObj.produtos)
            })
            //retornar uma resposta para o cliente
            req.on('end', () => {
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({
                    mensagem: 'Produto adicionado com sucesso',            
                    totalProdutos: dadosBancoObj.produtos.length
                }))
            })
        }
        else{
            res.end('A rota solicitada nao foi encontrada para esse método');
            return
        }
    }
    else{
        res.end('Nenhuma rota encontrada para esse método');
        return
    }
})

//inicar o servidor
//porta e uma função que será executada quando o servidor iniciar
servidor.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000')
    console.log('Acesse no navegador http://localhost:8000 para requisições do tipo GET')
})