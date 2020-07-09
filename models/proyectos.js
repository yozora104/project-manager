const Sequelize = require('sequelize');
const sequelize = require('./db');

const Proyecto = sequelize.define('proyectos', {
    id:{
        type:Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
    nombre: {
        type:Sequelize.STRING(50),
    allowNull: false},
     
    desc: {
        type:Sequelize.STRING(500),
        allowNull: true
    },
    fecha_ini:{
        type:Sequelize.DATE,
        allownull: false

    },
    fecha_fin:{
        type: Sequelize.DATE,
        allowNull: true

    }

});
module.exports = Proyecto;