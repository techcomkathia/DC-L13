// importação do módulo 
const fs = require('fs')

// caminho dos arquivos
const caminhoArquivo1 = './arquivo1.txt'
const caminhoArquivo2 = './arquivo2.txt'
const caminhoNovoArquivo = './novoArquivo.txt' //ainda não existe, até a execução do programa

fs.readFile(caminhoArquivo1, 'utf-8', (err, textoArquivo1) => {
    //primeira leitura do arquivo, com o conteúdo do arquivo 1

    fs.readFile(caminhoArquivo2, 'utf-8', (err, textoArquivo2) => {
        //segunda leitura do arquivo, com o conteúdo do arquivo 2

        fs.writeFile(caminhoNovoArquivo, `Texto concatenado: ${textoArquivo1} ${textoArquivo2}`, (err) => {
             if (err) {
                console.log('Opa! Deu erro!')
            }
        })
    })
})

// alternativa usando o método sync
const conteudo1 = fs.readFileSync(caminhoArquivo1, 'utf-8') //retorna o conteúdo do arquivo lido
const conteudo2 = fs.readFileSync(caminhoArquivo2, 'utf-8')
// método de escrita síncrona
fs.writeFileSync('outroNovoArquivo.txt', `Texto concatenado: ${conteudo1} ${conteudo2}`)