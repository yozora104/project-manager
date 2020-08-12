require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors =require('cors')
const cookieSession = require('cookie-session')
const {login, controlAcceso} = require('./controllers/autenticacion')
const {dashboard} = require('./controllers/dashboard')
// require('./models')
const {mostrarTarea} = require('./controllers/tareas')
const {registrarAccionTarea}  = require('./controllers/tareas')
const {CrearProyecto,listarProyectos,leerProyectos, modificarProyectos,eliminarProyecto} = require('./api/proyectos')
const { crearTarea, listarTareas,leerTarea, modificarTarea, eliminarTarea } = require('./api/tareas')


const app = express()
// view engine setup
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(cookieSession({
    name: 'cookiesession',
    keys: [process.env.KEY1, process.env.KEY2],
    maxAge: process.env.DURACION_COOKIE * 60 * 1000
}))
app.set('views','./views')
app.set('view engine','ejs')

//definicion de las rutas
app.get("/", controlAcceso("leer-tareas-asignadas"), dashboard)
app.get("/login", (req, res) => res.render("login"))
app.post("/login",login)
app.get('/tareas/:id', mostrarTarea)
app.post('/tareas/:id', registrarAccionTarea)
app.post('/api/proyectos', CrearProyecto)
app.get('/api/proyectos',listarProyectos)
app.get('/api/proyectos/:id', leerProyectos)
app.put('/api/proyectos/:id', modificarProyectos)
app.delete('/api/proyectos/:id',eliminarProyecto)
app.post('/api/tareas', crearTarea)
app.get('/api/tareas/:id', leerTarea)
app.get('/api/tareas',listarTareas)
app.put('/api/tareas/:id', modificarTarea)
app.delete('/api/tareas/:id',eliminarTarea)


app.listen(3000)