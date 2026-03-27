//busca de informações e exclusão no meio do array
let datasAgendamento = ["01/04", "02/04", "03/04", "04/04", "05/04", "06/04", "07/04", "08/04", "09/04", "10/04"]

/*O dr. Cleitinho tem um compromisso no dia 05/04, 08/04 e 09/04, então ele precisa excluir essa data da lista de agendamento

//As datas removidas, deverão ser amarzenadas em um array para que o dr. Cleitinho possa entrar em contato com os pacientes e remarcar a consulta

//métodos uteis para buscar informações em um array : indexOf, lastIndexOf, includes
//método útil para excluir elementos do array : splice(index, quantidade), ele retorna um array com os elementos excluídos*/
let datasRemovidas = []; 

let datasParaRemover = ["25/04","05/04", "08/04", "09/04" ]; 

for (let i = 0; i < datasParaRemover.length; i++) { 
    let indice = datasAgendamento.indexOf(datasParaRemover[i]); 
    if (indice !== -1) { 
        datasRemovidas.push(datasAgendamento.splice(indice, 1)[0] //["00/00"]
        ); 
    }
}

//datasRemovidas = [["05/04"], ["08/04"], ["09/04"]]
//datasAgendamento = ["05/04", "08/04", "09/04"]

console.log("Datas de agendamento atualizadas:", datasAgendamento); 
console.log("Datas removidas:", datasRemovidas);