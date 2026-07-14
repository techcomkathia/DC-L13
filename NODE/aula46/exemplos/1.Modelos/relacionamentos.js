//esse arquivo serve para explicar os relacionamentos entre os modelos e definir as cardinalidades entre eles
//um para um -> hasOne
//um para muitos -> hasMany
//muitos para um -> belongsTo
//muitos para muitos -> belongsToMany

const AutoresModel = require('./AutoresModel');
const LivrosModel = require('./LivrosModel');
const CategoriasModel = require('./CategoriasModel');

//relacionamentos

AutoresModel.hasMany(LivrosModel);
LivrosModel.belongsTo(AutoresModel);

CategoriasModel.hasMany(LivrosModel);
LivrosModel.belongsTo(CategoriasModel);

module.exports = {
    AutoresModel,
    LivrosModel,
    CategoriasModel
}

