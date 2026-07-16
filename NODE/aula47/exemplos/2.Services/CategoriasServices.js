const {CategoriasModel} = require('../1.Modelos/relacionamentos')
//importar sempre o modelo do arquivo relacionamentos, pois ele contém as referencias para os modelos que armazenam as referencias para as chaves estrangeiras e os relacionamentos/cardinalidades 

//operações possiveis para realizar no banco
//CRUD
async function listarTodasCategorias(){
    //definindo como uma função assincrona podemos usar a estrutura await
   try{
        const categorias = await CategoriasModel.findAll()
        //retornar no formato de objeto
        //tratar o retorno do banco captando apenas o atributo dataValues de cada um dos objetos
        const dados = categorias.map((categoria) => categoria.dataValues)
        console.log(dados)
        return { categorias: dados }
   }
   catch(error){
        console.log(error)
        return { erro: error.message }
   }

}

async function listarUmaCategoria(id) {
     try{
         const dado = await CategoriasModel.findByPk(id)
      if(dado.dataValues){
         console.log(dado.dataValues)
         return { categoria: dado.dataValues }
      }
      else{
         console.log('categoria nao encontrada')
         return { erro: 'categoria nao encontrada' }
      }
     }
     catch(error){
        console.log(error)
        return { erro: error.message }
     }
     
}

async function criarUmaCategoria(nomeCategoria) {
     const dado = await CategoriasModel.create({nome: nomeCategoria})
     
     if(nomeCategoria == null){
        console.log('nome nao informado')
        return { erro: 'nome nao informado' }
        
     }
     else if(dado.dataValues){
        console.log(dado.dataValues)
        return { categoria: dado.dataValues }
     }
     else{
        console.log('categoria nao criada')
        return { erro: 'categoria nao criada' }
     }
}


module.exports = {
    listarTodasCategorias,
    listarUmaCategoria,
    criarUmaCategoria
}

