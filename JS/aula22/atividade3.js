//Uma empresa deseja organizar as informações do RH. Muitos dos funcionários precisarão fazer visita a clientes, logo é necessário criar um atributo booleano para armazenar se o funcionário pode ou não dirigir. 

//As condições que precisam ser atendidas são: ser maior de 18 anos e ter carteira de motorista.
// o novo atributo será podeDirigir: true ou false

const funcionarios = [
  { nome: "Ana Souza", idade: 25, cnh: true, setor: "Financeiro", cargo: "Analista", podeDirigir: true },
  { nome: "Carlos Lima", idade: 17, cnh: false, setor: "TI", cargo: "Estagiário", podeDirigir: false },
  { nome: "Mariana Alves", idade: 30, cnh: true, setor: "RH", cargo: "Coordenadora", podeDirigir: true },
  { nome: "João Pedro", idade: 22, cnh: false, setor: "Logística", cargo: "Assistente", podeDirigir: false },
  { nome: "Fernanda Rocha", idade: 19, cnh: true, setor: "Marketing", cargo: "Analista", podeDirigir: true },
  { nome: "Lucas Martins", idade: 16, cnh: false, setor: "TI", cargo: "Jovem Aprendiz", podeDirigir: false },
  { nome: "Patrícia Gomes", idade: 40, cnh: true, setor: "Financeiro", cargo: "Gerente", podeDirigir: true },
  { nome: "Rafael Costa", idade: 28, cnh: true, setor: "Comercial", cargo: "Vendedor", podeDirigir: true },
  { nome: "Juliana Mendes", idade: 18, cnh: false, setor: "RH", cargo: "Assistente", podeDirigir: false },
  { nome: "Bruno Carvalho", idade: 35, cnh: true, setor: "Logística", cargo: "Supervisor", podeDirigir: true },
  { nome: "Camila Ribeiro", idade: 21, cnh: false, setor: "Marketing", cargo: "Social Media", podeDirigir: false },
  { nome: "Eduardo Nunes", idade: 45, cnh: true, setor: "Diretoria", cargo: "Diretor", podeDirigir: true }
];

//será construido um array novo com as informações de todos os funcionários com esse novo atributo em cada objeto.
//O array original não deve ser modificado.
//dica: use {...obj} para criar um novo objeto com as mesmas propriedades do objeto original
//use o && para criar uma condição que verifica se a idade e a cnh 

let funcionariosDirigem =  funcionarios.map((funcionario)=>{
    let novoFuncionario = {...funcionario} //desestrução do objeto para a criacao de um novo objeto copia

    // >18 e com chn
    if(novoFuncionario.idade >= 18 && novoFuncionario.cnh == true){
        novoFuncionario.podeDirigir = true
    }
    else{
        novoFuncionario.podeDirigir = false
    }
    return novoFuncionario
   
})
