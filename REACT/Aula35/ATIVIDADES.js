/* ------------------------- ATIVIDADE1 ------------------------- 

-Crie um projeto React utilizando o Vite (npm create vite@latest)
-Instale a biblioteca React Router Dom, Bootstrap  e React Bootstrap (npm install react-router-dom bootstrap react-bootstrap)
-Crie a estrutura de pastas do projeto, incluindo as pastas : componentes, paginas e rotas
-Crie um componente chamado BarraNavegacao para ser utilizado em todas as paginas do projeto
-Crie as seguintes paginas: Home, Produtos, DetalhesProduto e PaginaNaoEncontrada
-Configure as rotas utilizando o React Router Dom, incluindo uma rota para cada pagina criada e uma rota para a pagina de erro (PaginaNaoEncontrada)
-Utilize o componente BarraNavegacao e Rotas no App.js. Não esqueça de utilizar o BrowserRouter para envolver os componentes Rotas e BarraNavegacao no componente App.js

*/

/* ------------------------- ATIVIDADE2 -------------------------
-Crie um arquivo chamado ProdutosContext.js na pasta contextos
- Crie um ProdutosContext utilizando o createContext do React
- Crie um componente ProdutosProvider que utilize o useState para armazenar a lista de produtos e as funções para: adicionarProduto, removerProduto e atualizarProduto (a partir do id do produto utilize o método find para encontrar o produto e atualizar ou remover fazendo a manipulação necessária com a função setProdutos)

-Dica: Utilize o método find (para encontrar um produto) para manipular os produtos quando necessário encontrar um produto específico para atualizar ou remover
-Para excluir use o método filter para criar uma nova lista de produtos sem o produto que deseja excluir
-Para atualizar utilize o método map para criar uma nova lista de produtos, atualizando o produto que deseja atualizar e mantendo os outros produtos inalterados
*/
const produtos = [
  { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 10.99, imagem: 'https://placehold.co/600x400/C92071/FFFFFF' },
  { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 19.99, imagem: 'https://placehold.co/600x400/FF5733/FFFFFF' },
  { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 5.99, imagem: 'https://placehold.co/600x400/33FF57/FFFFFF' },
];

/*-------------------------- ATIVIDADE3 -------------------------
---1ª Etapa: Criar o contexto de tema-------------
-Crie o arquivo AppContext.jsx na pasta contextos
-Crie um componente AppProvider que utilize os componentes ProdutosProvider e TemaProvider para envolver os children do AppProvider, permitindo que os contextos de produtos e tema sejam acessíveis em toda a aplicação
-Utilize o componente AppProvider para envolver o componente App no arquivo main.jsx, garantindo que os contextos estejam disponíveis em toda a aplicação

---2ª Etapa: Utilizar o contexto de produtos-------------
-Crie o componente cardProduto para exibir as informações de cada produto, utilizando os dados do contexto de produtos para preencher as informações do card
-Utilize o contexto de produtos para fazer a renderização das informações de todos os produtos na pagina de produtos, utilizando o componente cardProduto para exibir as informações de cada produto

*/

/*-------------------------- ATIVIDADE4 -------------------------
Na página Home, crie um formulário para adicionar novos produtos, utilizando os campos: nome, descrição, preço e imagem (URL). Ao submeter o formulário, utilize a função adicionarProduto do contexto de produtos para adicionar o novo produto à lista de produtos. Certifique-se de que o novo produto seja renderizado na página de produtos após ser adicionado.

Importante, quando um novo produto for adicionado faça uma mensagem aparecer na tela confirmando que o produto foi adicionado com sucesso. Você pode utilizar um estado local para controlar a exibição dessa mensagem, definindo-o como true quando o produto for adicionado e utilizando a função de controle de estado para exibir a mensagem na tela através de uma renderização condicional. 

*/

/*DESAFIO: NAVEGAÇÃO COM O USO DE PROPRIEDADES DA ROTA

Modifique o card produto para que ele para que ele realize a navegação para a pagina de detalhes do produto quando o botão for clicado. Use o componente Link do React Router Dom para navegar para a pagina de detalhes do produto, montando a rota dinamicamente com o id do produto.


Na página de detalhes do produto, utilize o parametro da rota para captar o id, e consumindo o contexto de produtos, localize o produto correspondente ao id e renderize as informações do produto na página.
Use o hook useParams para captar o id da rota e o hook useContext para consumindo o contexto de produtos.

*/