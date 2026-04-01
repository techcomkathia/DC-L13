let pessoaObj = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
}
console.log(pessoaObj.cidade);
//criando um json a partir de um objeto
let pessoaJSON = JSON.stringify(pessoaObj);
console.log(pessoaJSON);
//continua sendo um objeto
let objeto2 = {
    "chave": "valor",
    "chave2": "123"
}
console.log(objeto2);
//convertendo um json para um objeto
let json2 = '{"chave": "valor", "chave2": "123"}';
console.log(json2);
let objeto3 = JSON.parse(json2);
console.log(objeto3);

//você recebeu uma informação no formato de json, mas deve alterar o valor de uma propriedade, posteriormente converter novamente para o formato json
//Esse processo é muito comum quando trabalhamos com APIs ( aplicações que se comunicam com o backend)

let usuarioJSON = '{"nome": "Maria", "idade": 25, "cidade": "Rio de Janeiro", "email": "maria@email", "telefone": "123456789"}';
let usuarioObj = JSON.parse(usuarioJSON); //converter para objeto, para que seja possível alterar o valor da propriedade

//faça atualização do email para maria.novo@email
usuarioObj.email = "maria.novo@email";
// faça a inclusão do campo whatsapp com o valor 987654321
usuarioObj.whatsapp = "987654321";
//converta novamente para o formato json
usuarioJSON = JSON.stringify(usuarioObj);//conversão do objeto para json e a atualização