//Implemente um campo de input numerico que permita que o usuário passe o id do produto que ele deseja excluir. Assim que o usuário digitar o id e submeter o formulário, a função deve ser chamada e o produto deve ser excluido do banco de dados.
//o usuário deve ser informado se o produto foi excluido ou se o produto nao foi encontrado em um campo de texto na tela, abaixo do formulário.

//DICAS: método getElementById() ou querySelector() para selecionar o formulário e o input
// evento submit do formulário, no addEventListener(). A função de callback deve ser assíncrona, usando await pois a exclusão do produto pode demorar e a resposta para o usuário depende do sucesso ou falha da exclusão.

//para fazer um função do tipo seta assíncrona, use a seguinte estrutura: async (parametros) => {...}