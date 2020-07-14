require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const {login, controlAcceso} = require('./controllers/autenticacion')
const {dashboard} = require('./controllers/dashboard')

require('./models')


const app = express()
// view engine setup
app.use(express.urlencoded({extended: false}));
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

app.listen(3000)