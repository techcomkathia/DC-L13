//importação dos módulos
const { error } = require('console')
const express = require('express')
const fs = require('fs')

//leitura e conversao dos dados do json
const dadosBanco = JSON.parse(fs.readFileSync('dbEscola.json', 'utf-8'))

//criação das rotas
//1º passo: instancia do express
const app = express() 
app.use(express.json())

//2ª passo: criação das rotas
app.get('/', (req, res) => {
    res.status(200)
    res.json({
        "mensagem": "Olá, seja bem-vindo a nossa API!",
        "recursos": [
            {
                rota: "/funcionarios",
                metodo: "GET",
                descricao: "Retorna uma lista de funcionários"
            },
            {
                rota: "/produtos",
                metodo: "GET",
                descricao: "Retorna uma lista de produtos"
            },
            {
                rota: "/unidades",
                metodo: "GET",
                descricao: `Retorna a lista das nossas ${dadosBanco.unidades.length} unidades` //utilizar o comprimento do array de unidades para informar a quantidade de unidades
            }
        ]
    })
    res.end()
})
//rota para alunos
/*app.get('/alunos', (req, res) => {
    res.status(200)
    res.json({
        qtdAlunos: dadosBanco.alunos.length,
        alunos: dadosBanco.alunos
    })
    res.end()
})*/

//rota principal para alunos será modificada para permitir o uso de parâmetros de consulta
app.get('/alunos', (req, res) => {

    //incluindo parâmetros de consulta
    const {curso, nome} = req.query; //desestruturando os parâmetros de consulta da requisição

    let dadosBancoAlunos = dadosBanco.alunos

    if(curso){
        //banco de dados filtrado e atualizado com base no parâmetro de consulta
        dadosBancoAlunos = dadosBancoAlunos.filter(a => a.curso == curso);
    }

    if(nome){
        //banco de dados filtrado e atualizado com base no parâmetro de consulta
        dadosBancoAlunos = dadosBancoAlunos.filter(a => a.nome == nome);
    }

    if(dadosBancoAlunos.length == 0){
        res.status(404)
        res.json({
            mensagem: "Nenhum aluno encontrado",
            status: 404
        })
        res.end()
    }

    res.status(200)
    res.json({
        qtdAlunos: dadosBancoAlunos.length,
        alunos: dadosBancoAlunos
    })
    res.end()

})
//rota para filtrar curso e nome
//alunos?curso=informatica&nome=cleitinho


//alunos/:id
app.get('/alunos/:id', (req, res) => {
    //usar o objeto req para ter acesso as parâmetros da URL
    const id = parseInt(req.params.id) //obtendo o ID da URL e convertendo para número inteiro

    const aluno = dadosBanco.alunos.find(a => a.id == id) //procurando o aluno com o ID fornecido

    if(!aluno){
        res.status(404)
        res.json({
            mensagem: `Aluno com ID ${id} nao encontrado!`,
            status: 404,
            erro: "Aluno nao encontrado"
        })
        res.end()
    }

    res.status(200)
    res.json({
        aluno: aluno,
        mensagem: `Aluno com ID ${id} encontrado com sucesso!`,
        status: 200
    })
    res.end()
})
//-----------------------------------------------------------------------------


app.post('/alunos', (req, res) => {

    try{
        const alunoInformado = {
            email: req.body.email || null,
            senha: req.body.senha || null,
            nome: req.body.nome || null,
            endereco: req.body.endereco || null,
            telefone: req.body.telefone || null,
            curso: req.body.curso || null,
            disciplinasCursadas: req.body.disciplinasCursadas || null
        }
        const camposObrigatorios = [ "email",  "senha","nome", "endereco", "telefone","curso","disciplinasCursadas" ]

        const atributosNaoInformados = camposObrigatorios.filter(atributo => alunoInformado[atributo] == null)
       
        
        if( atributosNaoInformados.length > 0){
            res.status(400)
            res.json({
                mensagem: "Dados obrigatórios nao informados",
                status: 400,
                erro: `Lista dos atributos obrigatórios não informados: ${atributosNaoInformados.join(", ")}`
            })
            res.end()
            return
        }

                      
        const ultimoIDbanco = dadosBanco.alunos[dadosBanco.alunos.length - 1].id

        alunoInformado.id = ultimoIDbanco + 1

        //adicionar o aluno ao banco de dados
        dadosBanco.alunos.push(alunoInformado)

        //persistencia dos dados no banco
        fs.writeFileSync('bancoAlunos.json', JSON.stringify(dadosBanco))

        res.status(201)
        res.json({
            mensagem: "Aluno cadastrado com sucesso",
            status: 201,
            aluno: aluno
        })
        res.end()
    }
    catch(erro){
        res.status(500)
        res.json({
            mensagem: "Erro ao cadastrar aluno",
            status: 500,
            erro: erro.message
        })
        res.end()
    }
})



app.get('/unidades', (req, res) => {

    res.status(200)
    res.json({
        qtdUnidades: dadosBanco.unidades.length,
        unidades: dadosBanco.unidades
    })
    res.end()
})


app.post('/unidades', (req, res) => {
    try{

        const unidadeInformada = req.body
        const camposObrigatorios = [ "nome", "endereco", "telefone" ]

        const atributosNaoInformados = camposObrigatorios.filter(atributo => unidadeInformada[atributo] == null)
       
        
        if( atributosNaoInformados.length > 0){
            res.status(400)
            res.json({
                mensagem: "Dados obrigatórios nao informados",
                status: 400,
                erro: `Lista dos atributos obrigatórios não informados: ${atributosNaoInformados.join(", ")}`
            })
            res.end()
            return
        }

        unidadeInformada.id = dadosBanco.unidades[dadosBanco.unidades.length - 1].id + 1
        
        //adicionar o unidade ao banco de dados
        dadosBanco.unidades.push(unidadeInformada)

        //persistencia dos dados no banco
        fs.writeFileSync('bancoUnidades.json', JSON.stringify(dadosBanco))

        res.status(201)
        res.json({
            mensagem: "Unidade cadastrada com sucesso",
            status: 201,
            unidade: unidadeInformada
        })
        res.end()



    }
    catch(erro){
        res.status(500)
        res.json({
            mensagem: "Erro ao cadastrar unidade",
            status: 500,
            erro: erro.message
        })
        .end()
    }
})



















//----------------------------------------------------------------------------

//3º criação do servidor
app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000')
    console.log('Acesse no navegador http://localhost:8000 para requisições do tipo GET')
})
