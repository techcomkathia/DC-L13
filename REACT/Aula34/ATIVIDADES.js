//Criando um aplicativo com 3 páginas:
//Home, produtos e produtos/1

//1º Passo: criação do projeto e instalação das dependências
//npm create vite@latest 
//npm install react-router-dom bootstrap react-bootstrap

//2º Passo: criação da estrutura de pastas e arquivos
//componentes
//paginas
//rotas

//3º Passo: criação do componente das páginas (apenas o nome da página para identificar qual página está sendo renderizada)

//4º Passo: criação do componente das rotas
//(importação das paginas, importação do componente de routes e route do react router dom)
//5º Passo: configuração do roteamento no arquivo app.
//(importação do componente de rotas, importação do browser router do react router dom, configuração do browser router para envolver o componente de rotas)


//------------Tratamento de rotas não encontradas------------------

//6º Passo: criação do componente de pagina nao encontrada
//7º Passo: configuração da rota de pagina nao encontrada
//(depois de todas as rotas configuradas, coloque uma rota para quando nenhuma outra for encontrada, utilizando o path '*' e o 
// elemento do componente de pagina nao encontrada)


//-----------Padronização do layout da aplicação------------------
//8º Passo: criação do componente de template: terá um header e um footer, e o conteúdo do meio será renderizado dentro dele
/* 8.1 Passo: criação do componente de header: terá um menu de navegação com links para as páginas da aplicação (home e produtos)
   8.2 Passo: criação do componente de footer: terá um rodapé com informações de contato ou direitos autorais
   8.3 Passo: configuração do componente de template para renderizar o header, o footer e o conteúdo do meio (utilizando a prop children para para alternar as paginas dentro do template)

   IMPORTANTE: use o componente LINK e não a tag <a> para criar os links de navegação, pois o LINK é um componente do react router dom que permite a navegação sem recarregar a página, enquanto a tag <a> recarrega a página e perde o estado da aplicação.
*/
//9º Passo: configuração do roteamento para renderizar as páginas dentro do template
//(envolva o componente de rotas dentro do componente de template, para que todas as páginas sejam renderizadas )
//10º Passo: coloque o tamplate dentro do componente de browser router, para que as rotas funcionem dentro do template com o uso do componente LINK)

//-----------------Implementando a navegação com Rotas com parâmetros------------------
/* A página home irá apresentar a loja com o conceito dos produtos. 
   A página produtos irá apresentar a lista de produtos, e cada produto será renderizado como um card do react bootstrap e no botão do card deverá ter um link para a página do produto, utilizando o componente LINK do react router dom, e passando o id do produto como parâmetro na rota.
   A página do produto (produtos/:id) irá apresentar as informações do produto, e para captar o parâmetro da rota, utilizamos o hook useParams do react router dom, que retorna um objeto com os parâmetros da rota, e podemos acessar o parâmetro id através do objeto params.id ou do useParams().id, e com esse id, podemos buscar as informações do produto no array de produtos e renderizar as informações do produto na página.
   Caso o id do produto não seja encontrado no array de produtos, podemos renderizar uma mensagem de produto não encontrado ou redirecionar para a página de produtos.
*/

const produtos = [
  {
    id: 1,
    nome: "Nike Air Max Pulse",
    descricao:
      "Tênis esportivo moderno com amortecimento confortável e design urbano para uso casual e treinos leves.",
    imagem:
      "https://placehold.co/600x400/C92071/FFFFFF?text=Nike+Air+Max+Pulse",
    preco: 899.9,
    precoDesconto: 699.9,
    detalhes: [
      "https://placehold.co/600x400/C92071/FFFFFF?text=Vista+Frontal",
      "https://placehold.co/600x400/B5B6F2/1F1F1F?text=Vista+Lateral",
      "https://placehold.co/600x400/991956/FFFFFF?text=Vista+Traseira"
    ],
    marca: "Nike",
    tamanhos: [38, 39, 40, 41, 42],
    cores: ["#C92071", "#B5B6F2", "#991956"]
  },

  {
    id: 2,
    nome: "Adidas Ultraboost",
    descricao:
      "Tênis confortável com tecnologia de amortecimento responsivo ideal para caminhadas e corridas.",
    imagem:
      "https://placehold.co/600x400/B5B6F2/1F1F1F?text=Adidas+Ultraboost",
    preco: 799.9,
    precoDesconto: 649.9,
    detalhes: [
      "https://placehold.co/600x400/B5B6F2/1F1F1F?text=Vista+Frontal",
      "https://placehold.co/600x400/F5F5F5/1F1F1F?text=Vista+Superior",
      "https://placehold.co/600x400/474747/FFFFFF?text=Vista+da+Sola"
    ],
    marca: "Adidas",
    tamanhos: [37, 38, 39, 40, 41],
    cores: ["#B5B6F2", "#F5F5F5", "#474747"]
  },

  {
    id: 3,
    nome: "Puma RS-X",
    descricao:
     "Modelo com visual robusto e moderno, combinando conforto e estilo para o dia a dia.",
    imagem:
      "https://placehold.co/600x400/EE4266/FFFFFF?text=Puma+RS-X",
    preco: 599.9,
    precoDesconto: 449.9,
    detalhes: [
      "https://placehold.co/600x400/EE4266/FFFFFF?text=Vista+Frontal",
      "https://placehold.co/600x400/F6AA1C/1F1F1F?text=Vista+Lateral",
      "https://placehold.co/600x400/52CA76/FFFFFF?text=Vista+Traseira"
    ],
    marca: "Puma",
    tamanhos: [36, 37, 38, 39, 40],
    cores: ["#EE4266", "#F6AA1C", "#52CA76"]
  },
  {
    id: 4,
    nome: "New Balance 550",
    descricao:
      "Tênis clássico inspirado no basquete retrô, ideal para compor looks casuais modernos.",
    imagem:
      "https://placehold.co/600x400/52CA76/FFFFFF?text=New+Balance+550",
    preco: 699.9,
    precoDesconto: 579.9,
    detalhes: [
      "https://placehold.co/600x400/52CA76/FFFFFF?text=Vista+Frontal",
      "https://placehold.co/600x400/CCCCCC/1F1F1F?text=Vista+Lateral",
      "https://placehold.co/600x400/666666/FFFFFF?text=Vista+Traseira"
    ],
    marca: "New Balance",
    tamanhos: [39, 40, 41, 42, 43],
    cores: ["#52CA76", "#CCCCCC", "#666666"]
  },
  {
    id: 5,
    nome: "Converse Chuck Taylor",
    descricao:
      "Tênis icônico de cano baixo com visual casual e versátil para diferentes estilos.",
    imagem:
      "https://placehold.co/600x400/1F1F1F/FFFFFF?text=Converse+Chuck+Taylor",
    preco: 299.9,
    precoDesconto: 249.9,
    detalhes: [
      "https://placehold.co/600x400/1F1F1F/FFFFFF?text=Vista+Frontal",
      "https://placehold.co/600x400/474747/FFFFFF?text=Vista+Lateral",
      "https://placehold.co/600x400/F5F5F5/1F1F1F?text=Vista+Traseira"
    ],
    marca: "Converse",
    tamanhos: [34, 35, 36, 37, 38],
    cores: ["#1F1F1F", "#474747", "#F5F5F5"]
  }
]