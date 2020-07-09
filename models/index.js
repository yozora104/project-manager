const sequelize = require('./db');
const Proyectos =require('./proyecto');
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
    Proyectos
}