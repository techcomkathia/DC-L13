//------------------------ Atividade 1 ------------------------
//crie a aplicação em react com vite (comando: npm create vite@latest)
//Faça a instalação do react-bootstrap e do bootstrap na sua aplicação (Comando: npm install react-bootstrap bootstrap)

//importe a folha de css do bootstrap no arquivo App.jsx (import '../node_modules/bootstrap/dist/css/bootstrap.min.css')

//Crie um componente chamado CardProduto. Use o componente Card do react-bootstrap
//O componente CardProduto deve receber as seguintes propriedades: imagem, nome, preco e descricao
//Teste a renderizacao de um card de produto usando o componente CardProduto no app com as seguintes informacoes:
//{imagem: https://via.placeholder.com/150, nome: "Camisa de Linho", preco: 150.00, descricao: "Camisa feita de linho de alta qualidade"}
//conceitos explorados: propriedades, componentes, biblioteca react-bootstrap e bootstrap


//------------------------ Atividade 2 ------------------------
//Altere o componente CardProduto incluir dois botões. Esses botões terão o objetivo de incrementar e decrementar a quantidade de produtos. O valor inicial deve ser 1, quando o botão de incrementar for clicado, essa quantidade deve ser aumentada em 1 e quando o botão de decrementar for clicado essa quantidade deve ser diminuida em 1. 
//Importante : o botão decrementar deve ser desabilitado quando a quantidade for 1, e o botão incrementar deve ser desabilitado quando a quantidade for 10.
//DICA : use o hook useState para gerenciar o estado da quantidade de produtos. Para desabilitar o botão use o atributo disabled do botão.