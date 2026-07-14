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

listarTodasCategorias()