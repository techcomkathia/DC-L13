//1ª ATIVIDADE : crie um projeto com vite, instale o react-bootstrap e o bootstrap, faça a criação do componente CardProduto. Ele receberá as seguintes propriedades: imagem, titulo, preço e preçoComDesconto.
//Comandos: npm create vite@latest (siga todas as etapas do console) - npm install react-bootstrap bootstrap
//IMPORTANTE : importe a folha de css do bootstrap no arquivo App.jsx (import '../node_modules/bootstrap/dist/css/bootstrap.min.css')
//Dados para usar no teste 

const products = [
  {
    name: "Nike Air Max Pulse",
    image: "https://placehold.co/600x400/C92071/FFFFFF?text=Nike+Air+Max+Pulse",
    price: 899.9,
    priceDiscount: 699.9,
    details: [
      "https://placehold.co/600x400/C92071/FFFFFF?text=Front+View",
      "https://placehold.co/600x400/B5B6F2/1F1F1F?text=Side+View",
      "https://placehold.co/600x400/991956/FFFFFF?text=Back+View"
    ],
    brand: "Nike",
    sizes: [38, 39, 40, 41, 42],
    colors: ["#C92071", "#B5B6F2", "#991956"]
  },

  {
    name: "Adidas Ultraboost",
    image: "https://placehold.co/600x400/B5B6F2/1F1F1F?text=Adidas+Ultraboost",
    price: 799.9,
    priceDiscount: 649.9,

    details: [
      "https://placehold.co/600x400/B5B6F2/1F1F1F?text=Front+View",
      "https://placehold.co/600x400/F5F5F5/1F1F1F?text=Top+View",
      "https://placehold.co/600x400/474747/FFFFFF?text=Sole+View"
    ],

    brand: "Adidas",

    sizes: [37, 38, 39, 40, 41],

    colors: ["#B5B6F2", "#F5F5F5", "#474747"]
  },

  {
    name: "Puma RS-X",
    image: "https://placehold.co/600x400/EE4266/FFFFFF?text=Puma+RS-X",
    price: 599.9,
    priceDiscount: 449.9,

    details: [
      "https://placehold.co/600x400/EE4266/FFFFFF?text=Front+View",
      "https://placehold.co/600x400/F6AA1C/1F1F1F?text=Side+View",
      "https://placehold.co/600x400/52CA76/FFFFFF?text=Back+View"
    ],

    brand: "Puma",

    sizes: [36, 37, 38, 39, 40],

    colors: ["#EE4266", "#F6AA1C", "#52CA76"]
  },

  {
    name: "New Balance 550",
    image: "https://placehold.co/600x400/52CA76/FFFFFF?text=New+Balance+550",
    price: 699.9,
    priceDiscount: 579.9,

    details: [
      "https://placehold.co/600x400/52CA76/FFFFFF?text=Front+View",
      "https://placehold.co/600x400/CCCCCC/1F1F1F?text=Side+View",
      "https://placehold.co/600x400/666666/FFFFFF?text=Back+View"
    ],

    brand: "New Balance",

    sizes: [39, 40, 41, 42, 43],

    colors: ["#52CA76", "#CCCCCC", "#666666"]
  },

  {
    name: "Converse Chuck Taylor",
    image: "https://placehold.co/600x400/1F1F1F/FFFFFF?text=Converse+Chuck+Taylor",
    price: 299.9,
    priceDiscount: 249.9,

    details: [
      "https://placehold.co/600x400/1F1F1F/FFFFFF?text=Front+View",
      "https://placehold.co/600x400/474747/FFFFFF?text=Side+View",
      "https://placehold.co/600x400/F5F5F5/1F1F1F?text=Back+View"
    ],

    brand: "Converse",

    sizes: [34, 35, 36, 37, 38],

    colors: ["#1F1F1F", "#474747", "#F5F5F5"]
  }
]