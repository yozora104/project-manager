function dashboard(req, res) {
    const usuario = req.session.usuarios;

    if (usuario) {
        res.render('dashboard', {usuario})
    } else {
        res.redirect('/login')
    }
}


module.exports = {
    dashboard
}