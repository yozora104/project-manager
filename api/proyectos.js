const {Proyectos} = require("../models")
function CrearProyecto(req, res) {
    Proyectos.create(req.body)
    .then(nuevoProyecto =>{
     res.status(201).json(nuevoProyecto)

    })
    .catch(err =>{
        res.status(400).json(err.message)
    })
    
}
 function listarProyectos(req, res) {
     Proyectos.findAll()
     .then(proyectos => {
         res.status(200).json(proyectos)
     })
     .catch(err=>{
         res.status(400).json(err.message)
     })
 }
 
module.exports = {
    CrearProyecto
    //añadir mas funciones a medida que se vayan haciendo
}