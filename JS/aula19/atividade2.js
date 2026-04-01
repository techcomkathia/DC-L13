// você fará a atualização de dados de um aluno no sistema escolar.

let aluno = {
    nome: 'João',
    idade: 20,
    curso: 'DFS-JS',
    notas: [8, 7, 9, 6],
    turno: 'matutino',
    responsavel_financeiro: 'Maria'
}
// a atualização do nome do aluno, para o nome completo: João Silva de Souza
aluno.nome = 'João Silva de Souza';
console.log(aluno);
// a criação de um atributo para o número de matrícula do aluno, com o valor: 2021001
aluno.matricula = 2021001;
console.log(aluno);
// a criação de um atributo para a média das notas do aluno
let somaNotas = aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]
//aluno.media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length;
aluno.media = somaNotas / aluno.notas.length;
console.log(aluno);
// a exclusão do atributo de responsável financeiro do aluno
delete aluno.responsavel_financeiro;
console.log(aluno);
//a cada atualização imprima o objeto atualizado no console

