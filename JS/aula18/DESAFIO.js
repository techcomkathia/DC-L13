//você foi contratado para criar o sistema de atendimento do dr. Cleitinho, um médico muito famoso que tem uma agenda lotada de pacientes. Esse sistema é para a nova unidade que conta com um sistema de emergêcia. 

//são 2 filas: atendimento normal e atendimento de prioritário. 
//pessoas com mais de 60 anos, gestantes e pessoas com deficiência tem direito ao atendimento prioritário.
//todas as outras pessoas entram na fila de atendimento normal.

//situações de emergência, como acidentes, infartos, etc, tem prioridade máxima e devem ser atendidos imediatamente, independentemente da fila em que estejam. Essa pessoa será adicionada no início da fila de atendimento prioritário

let atendimentoNormal = ["João", "Maria", "Pedro", "Ana", "Lucas"];
let atendimentoPrioritario = ["Sr. Silva", "Sra. Oliveira", "Sra. Santos"];

//adicione Sra Iracema no atendimento prioritário
atendimentoPrioritario.push("Sra. Iracema");
// Leia 3 nomes e verifique se eles estão na fila de atendimento normal ou prioritário, faça as inclusões
for(let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do paciente:");
    let condicao= confirm("O paciente tem mais de 60 anos, é gestante ou tem alguma deficiência? Clique em OK para sim e Cancelar para não.");

    if(condicao) { //caso true, o paciente tem direito ao atendimento prioritário
        atendimentoPrioritario.push(nome);
    }
    else{
        atendimentoNormal.push(nome);
    }
    console.log("Fila de atendimento prioritário:", atendimentoPrioritario);
    console.log("Fila de atendimento normal:", atendimentoNormal);
}

// Cleitinho Jr. levou um tombo e precisa ser atendido imediatamente ele terá prioridade máxima, adicione no início da fila de atendimento prioritário
atendimentoPrioritario.unshift("Cleitinho Jr.");
console.log("Fila de atendimento prioritário:", atendimentoPrioritario);
//PUSH - ADICIONA NO FINAL DO ARRAY
//UNSHIFT - ADICIONA NO INÍCIO DO ARRAY

//TODO ATENDIMENTO FEITO DEVE REMOVER O NOME DO PACIENTE DA FILA E ADICIONAR NA FILA DE ATENDIMENTO REALIZADO
let atendimentoRealizado = [];

//cleitinho jr será atendido antes de todas as pessoas. Remova ele do inicio da fila de atendimento prioritário e adicione na fila de atendimento realizado
// Serão chamadas + 5 pessoas, os números ímpares serão para atendimento prioritário e os números pares para atendimento normal, lembre-se deve ser removido da fila de atendimento e adicionado na fila de atendimento realizado, sempre do início da fila.

//SHIFT - REMOVE DO INÍCIO DO ARRAY
//SPLICE - REMOVE DO MEIO DO ARRAY
//POP - REMOVE DO FINAL DO ARRAY

