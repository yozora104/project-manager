const { Tareas } = require("../models")

function crearTarea(req,res){
   Tareas.create(req.body)
   .then(nuevaTarea =>{
       res.status(201).json(nuevaTarea)
   }) 
   .catch(err=>{
       res.status(400).json(err.message)
   })
}

function listarTareas(req, res) {
    Tareas.findAll()
    .then(tareas => {
        res.status(200).json(tareas)
    })
    .catch(err=>{
        res.status(400).json(err.message)
    })
}
function leerTarea(req,res){
    Tareas.findByPk(req.params.id)
    .then(tareas =>{
       if (tareas) res.status(200).json(tareas)
       else res.status(404).json("Tarea no encontrada")
    })
     .catch(err=>{
         res.status(400).json(err.message)
     })
}

function modificarTarea(req,res){
    Tareas.findByPk(req.params.id)
    .then (tareas =>{
        if (tareas){
            Object.assign(tareas, req.body)
            tareas.save()
            .then (tareass =>{
                res.status(200).json(tareas)
            })

        }
        else res.status(404).json("tareas no encontrado")
    })


}
function eliminarTarea(req, res) {
   Tareas.findByPk(req.params.id)
   .then(tareas => {
       if (tareas) {
           tareas.destroy()
           .then(() => {
               res.status(200).json({})
           })
       } else {
           res.status(404).json("tarea no encontrado")
       }
   })
   .catch(err => {
       res.status(400).json(err.message)
   })
}




module.exports= {
    crearTarea,
    listarTareas,
    eliminarTarea,
    modificarTarea,
    leerTarea
}