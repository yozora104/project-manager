const Sequelize = require('sequelize');
const sequelize = require('./db');

const Tarea = sequelize.define('tareas', {
    id:{
        type:Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
    nombre: {
        type:Sequelize.STRING(50),
    allowNull: false},
     
    fechaini:{
        type:Sequelize.DATE,
        allownull: false

    },
    fechaVencimiento:{
        type: Sequelize.DATE,
        allowNull: true

    },

    fechafin:{
        type: Sequelize.DATE,
        allowNull: true

    }

});
module.exports = Tarea;