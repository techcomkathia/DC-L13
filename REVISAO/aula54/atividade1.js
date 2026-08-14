//OBJETIVO: definição de classes e instâncias de objetos

class Livro {

    #status
    constructor(titulo, ano_publicacao, autor, status = "disponível") {
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
        this.autor = autor;
        this.#status = status;
    }

    getStatus() {
        return this.#status;
    }

    setStatus(status) {
        this.#status = status;
    }

    getInfo() {
        return {
            titulo: this.titulo,
            ano_publicacao: this.ano_publicacao,
            autor: this.autor,
            status: this.#status
        }
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        //verficar se o livro tem os dados necessários
        //o livro deve ser da classe Livro 
        if(( livro instanceof Livro) == false){ 
            //o instanceof verifica se o livro pertence a classe Livro, que é diferente de um objeto que tenha os atributos da classe Livro mas não seja da classe Livro
            throw new Error("O livro deve ser da classe Livro");
        }
        this.livros.push(livro);
    }

    listarLivros() {
        if(this.livros.length == 0) {
            return "Nenhum livro cadastrado";
        }
        return this.livros;
    }


    emprestarLivro(livro){

        //verifica se o livro está disponível para emprestimo e se o livro estiver disponível, altera o status para emprestado
        if(livro.getStatus() == "disponível"){
            livro.setStatus("emprestado");
            return "Livro emprestado com sucesso";
        }
        else{
            throw new Error("Livro indisponível para emprestimo");
        }
    }

    devolverLivro(livro){
        if(livro.getStatus() == "emprestado"){
            livro.setStatus("disponível");
            return "Livro devolvido com sucesso";
        }
        else{
            throw new Error("Livro não foi emprestado, logo não pode ser devolvido");
        }
        
    }

}

const livro1 = new Livro("O Senhor dos Aneis", 1954, "JRR Tolkien");
const livroObjeto = {
    titulo: "O Senhor dos Aneis",
    ano_publicacao: 1954,
    autor: "JRR Tolkien",
    status: "emprestado"
}
const livro2 = new Livro("O Hobbit", 1937, "JRR Tolkien", "emprestado");
const biblioteca = new Biblioteca();
//biblioteca.adicionarLivro(livroObjeto);
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
console.log(biblioteca.listarLivros());
console.log(livro1.titulo);
console.log(biblioteca.livros[0].titulo)
livro1.titulo = "teste atualização por atributo"
console.log(biblioteca.livros[0].titulo)
console.log(livro1.titulo)

console.log(biblioteca.emprestarLivro(livro1));
console.log(biblioteca.livros)
console.log(biblioteca.devolverLivro(livro2));
console.log(biblioteca.livros.map(livro => livro.getInfo()))
