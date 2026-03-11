/* Uma escola quer um sistema para verificar a aprovação dos alunos. O sistema deve receber a média de um aluno . 
Se a média for maior ou igual a 7, o aluno é aprovado.
Se a média for maior ou igual a 4 e menor que 7 o aluno está em recuperação.
Caso contrário, o aluno é reprovado ( media abaixo 4).
O sistema deve exibir a média e a situação do aluno (aprovado ou reprovado) no console ou no alert.*/

//1 variável 
let media = parseFloat(prompt("Digite a média do aluno: ")); //"7.56" -> 7.56
//parseInt - "7.56" -> 7
//Number - "7.56" -> 7.56

//possibilidades:
//condição -> procedimento
// maior ou igual a 7 -> mostrar nota e aprovado ok
// maior ou igual a 4 -> mostrar nota e recuperação ok
// menor que 4 (condição final) -> mostrar nota e reprovado

if(media>= 7){
    console.log(`A média é ${media} e o aluno foi aprovado`)
}
else if(media>=4){
    console.log(`A média é ${media}. O aluno está em recuperação`)
}
else{
    console.log(`A média é ${media}. O aluno foi reprovado`)
}