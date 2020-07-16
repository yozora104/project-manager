require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const {login, controlAcceso} = require('./controllers/autenticacion')
const {dashboard} = require('./controllers/dashboard')
// require('./models')
const {mostrarTarea} = require('./controllers/tareas')
const {registrarAccionTarea}  = require('./controllers/tareas')
const {CrearProyecto,listarProyectos,leerProyectos, modificarProyectos} = require('./api/proyectos')


const app = express()
// view engine setup
app.use(express.urlencoded({extended: false}));
app.use(express.json())
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


app.listen(3000)