//faça uma função que recebe como parâmetro, 3 notas, um nome e uma disciplina. 
//Essa função deve calcular a média (aritmética) das notas, definir a situação do aluno (aprovado, reprovado ou recuperação) e montar um objeto que será retornado pela função: 
// formato do objeto:
// {
//     nome: 'nome do aluno',
//     disciplina: 'disciplina do aluno',
//     media: 'média das notas',
//     situacao: 'situação do aluno'
// }

//regras para definir a situação do aluno:
//média >= 7: aprovado
//média >= 5 e < 7: recuperação
//média < 5: reprovado

function calcularSituacaoAluno(nota1, nota2, nota3, nome, disciplina){
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';

    //condições : aprovado, recuperação ou reprovado

    if(media >= 7){
        situacao = 'Aprovado';
    }
    else if(media >= 5 ){
        situacao = 'Recuperação';
    }
    else{
        situacao = 'Reprovado';
    }

    return {
        nome: nome,
        disciplina: disciplina,
        media: media,
        situacao: situacao
    };
}


let nota1 = 8;
let nota2 = 6;
let nota3 = 9;
let nome = 'João';
let disciplina = 'Matemática';

let resultado = calcularSituacaoAluno(nota1, nota2, nota3, nome, disciplina);

console.log(resultado);

console.log(calcularSituacaoAluno(4, 5, 6, 'Maria', 'Português'));