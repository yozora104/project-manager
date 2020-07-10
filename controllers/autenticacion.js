const { Usuarios } = require("../models");

function login(req,res) {
    const {email, password}= req.body;
    Usuarios.findOne({where: {email, password}})
    .then(usuarios => {
        req.session.usuarios = usuarios;
        res.redirect("/");
    } else{
    res.redirect("/login")
}

module.exports={
    login
}