const {Sequelize}= require('sequelize');


const conexaoBanco = new Sequelize('aula48_l13', 'root', 'km2026', {host: 'localhost', dialect: 'mysql', port: 3306, logging: false});

module.exports = conexaoBanco