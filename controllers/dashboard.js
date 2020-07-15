const { Usuarios, Tareas } = require("../models");
const moment =require("moment");

function dashboard(req, res) {
    const usuario = req.session.usuarios;

    Usuarios.findByPk(usuario.id, {
        include: {model: Tareas, as: 'tareas'}
    })
    .then(usuario => {
      const tareas = usuario.tareas.map(tarea => {
          return {
            link:"/tareas/" +tarea.id,
              nombre: tarea.nombre,
              fechaini: moment(tarea.fechaini).format("DD/MM/YYYY"),
              fechaVencimiento: tarea.fechaVencimiento && moment(tarea.fechaVencimiento).format("DD/MM/YYYY")
          }
      });
  
      res.render('dashboard', {usuario, tareas})
  })
  
}


module.exports = {
  dashboard
}