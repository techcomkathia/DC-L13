const sequelize = require('./ExemploSequelize')
const { DataTypes } = require('sequelize')

//importar 2 modelos
const AutorModel = require('./ExemploAutorModel')
const CategoriaModel = require('./ExemploCategoriaModel')

/*Table: livros
Columns:
id int AI PK 
titulo varchar(100) 
ano_publicacao int 
preco decimal(10,2) 
autor_id int 
categoria_id int*/

const LivrosModel = sequelize.define('livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    //chaves estrangeiras
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: AutorModel,
            key: 'id_autor'
        }
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CategoriaModel,
            key: 'idCategoria'
        }
    }
},
{
    tableName: 'livros',
    timestamps: false
})

//definição dos relacionamentos
LivrosModel.belongsTo(AutorModel, { foreignKey: 'autor_id' }) //livro pertence a um autor
LivrosModel.belongsTo(CategoriaModel, { foreignKey: 'categoria_id' }) //livro pertence a uma categoria
CategoriaModel.hasMany(LivrosModel, { foreignKey: 'categoria_id' }) //uma categoria tem muitos livros
AutorModel.hasMany(LivrosModel, { foreignKey: 'autor_id' }) //um autor tem muitos livros

module.exports = LivrosModel


LivrosModel.create({
    titulo: 'Livro 10',
    ano_publicacao: 2023,
    preco: 100.00,
    autor_id: 1,
    categoria_id: 1100
})
