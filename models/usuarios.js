const Sequelize = require('sequelize');
const sequelize = require('./db');

const Usuarios = sequelize.define('usuarios', {
    id:{
        type:Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
    nombre:{
        type:Sequelize.STRING(30),
        allownull: false

    },
    email:
    { 
        type:Sequelize.STRING(50),
        allownull: false,
        unique: true

    },
    password:{
        type:Sequelize.STRING(16),
        allownull: false

    }
    
    });
    module.exports = Usuarios;