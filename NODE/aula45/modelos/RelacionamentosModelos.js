const nfModel = require('./NfModel');
const itensModel = require('./ItensModel');
const produtoresModel = require('./ProdutoresModel');
const vendasModel = require('./VendasModel');


vendasModel.belongsTo(nfModel, { foreignKey: 'fkNf' });
vendasModel.belongsTo(itensModel, { foreignKey: 'fkItem' });
vendasModel.belongsTo(produtoresModel, { foreignKey: 'fkProd' });

produtoresModel.hasMany(vendasModel, { foreignKey: 'fkProd' });
itensModel.hasMany(vendasModel, { foreignKey: 'fkItem' });
nfModel.hasMany(vendasModel, { foreignKey: 'fkNf' });