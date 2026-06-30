// a ideia é acessar pela leitura, convertendo o conteúdo do arquivo em um objeto js
// manipular o objeto js, convertendo-o de volta em um arquivo json e escrever novamente no arquivo original

const fs = require('fs')

const dadosJson = fs.readFileSync('exemplo.json', 'utf-8')

const dadosObjeto = JSON.parse(dadosJson)

// adicionar uma nova fruta ao objeto js
dadosObjeto.frutas.push({id: 3, nome: 'Laranja'})

// escrever o objeto js convertido em um arquivo json
//sobrescreve o arquivo original, dessa forma fazemos a atualização
fs.writeFileSync('exemplo.json', JSON.stringify(dadosObjeto))