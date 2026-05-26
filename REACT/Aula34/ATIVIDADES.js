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
