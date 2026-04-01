// crie um objeto para representar um veículo:
//o veículo terá tipo, marca, modelo, ano, cor , quantidade de portas
//os valores serão : onibus, Mercedes-Benz, Sprinter, 2020, branco, 4

let veiculo = {
    tipo: 'onibus',
    marca: 'Mercedes-Benz',
    modelo: 'Sprinter',
    ano: 2020,
    cor: 'branco',
    quantidadePortas: 4
}
//atualização de valor do objeto
veiculo.cor = 'preto';
console.log(veiculo);

//criação de um novo valor para o objeto
//um novo par chave-valor para o objeto
veiculo.placa = 'ABC-1234';
console.log(veiculo);

//exclusão de um par chave-valor do objeto
delete veiculo.ano;
console.log(veiculo);