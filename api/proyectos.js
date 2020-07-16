const {Proyectos, Usuarios, Tareas} = require("../models")
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
 function leerProyectos(req,res){
     Proyectos.findByPk(req.params.id,{
        include: [{model:Usuarios, as:'participantes'}, Tareas]
     })
     .then(proyectos =>{
        if (proyectos) res.status(200).json(proyectos)
        else res.status(404).json("Proyecto no encontrado")
     })
      .catch(err=>{
          res.status(400).json(err.message)
      })
 }
 
 function modificarProyectos(req,res){
     Proyectos.findByPk(req.params.id)
     .then (proyectos =>{
         if (proyectos){
             Object.assign(proyectos, req.body)
             proyectos.save()
             .then (proyectos =>{
                 res.status(200).json(proyectos)
             })

         }
         else res.status(404).json("Proyecto no encontrado")
     })


 }
 function eliminarProyecto(req, res) {
    Proyectos.findByPk(req.params.id)
    .then(proyectos => {
        if (proyectos) {
            proyectos.destroy()
            .then(() => {
                res.status(200).json({})
            })
        } else {
            res.status(404).json("Proyecto no encontrado")
        }
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}
module.exports = {
    CrearProyecto,
    listarProyectos,
    leerProyectos,
    modificarProyectos,
    eliminarProyecto
    //añadir mas funciones a medida que se vayan haciendo
}