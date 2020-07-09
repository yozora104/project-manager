const sequelize = require('./db');
const {Proyectos} = require('./proyectos')
const {Tareas} = require('./tareas')
const {Usuarios} = require('./usuarios')
const {Roles} = require('./roles')
const Intervencion = require('./intervecion')

//Definimos las relaciones
Usuarios.belongsToMany(Proyectos,{through:'participaciones'})
Proyectos.hasMany(Tareas)
Tareas.belongsToMany(Usuarios,{as:'interveciones', through: Intervencion})
Usuario.hasOne(roles)
sequelize
.authenticate()
.then(() =>{
    console.log('conectado con la base de datos')
    sequelize.sync({alter:true});
})
.catch(err =>{
console.error('Error conectando con la BD')
});

module.exports = {
    sequelize,
    Proyectos,
    Tareas,
    Usuarios,
    Roles
}