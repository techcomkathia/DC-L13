//importação do express e do fs
const express = require('express')
const fs = require('fs')
const dadosBanco = JSON.parse(fs.readFileSync('bancoFrutas.json', 'utf-8'))

//criação da instancia do express
const app = express()

//utilização do middleware para tratar o corpo da requisição: dá a capacidade de receber dados no formato de JSON no corpo da requisição
app.use(express.json())

//rotas
app.get('/', (req, res) => {
    res.status(200)
    res.json({
        qtdFrutas: dadosBanco.frutas.length,
        qtdVerduras: dadosBanco.legumes.length
    })
    res.end()
})

app.get('/frutas', (req, res) => {
    res.status(200)
    res.json({
        qtdFrutas: dadosBanco.frutas.length,
        frutas : dadosBanco.frutas
    })
    res.end()
})

app.get('/frutas', (req, res) => {
    res.status(200)
    res.json(dadosBanco.frutas)
    res.end()
})

app.post('/frutas', (req, res)=>{
    //captar os dados informados
    const dadosReq =  req.body

    //validando os dados recebidosDoUsuario

    if(!dadosReq){
        res.status(400)
        res.json({
            mensagem: "Nenhum dado informado",
            status: 400
        })
        res.end()
        return
    }

    if(!dadosReq.nome || !dadosReq.quantidade){
        res.status(400)
        res.json({
            mensagem: "Nome e quantidade devem ser informados",
            status: 400
        })
        res.end()
        return
    }

    //id do ultimo elemento + 1 para ser o id da nova fruta
    dadosReq.id = dadosBanco.frutas.length + 1

    //gravando os dados no banco de dados
    dadosBanco.frutas.push(dadosReq)
    fs.writeFileSync('bancoFrutas.json', JSON.stringify(dadosBanco))
    res.status(201)
    res.json({
        mensagem: "Fruta cadastrada com sucesso",
        status: 201
    })
    res.end()

})

//servidor
app.listen(8001, () => {
    console.log('Servidor iniciado na porta 8001')
    console.log('Acesse no navegador http://localhost:8001 para requisições do tipo GET')
})