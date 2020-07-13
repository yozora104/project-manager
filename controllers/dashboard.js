function dashboard(req, res) {
    const usuario = req.session.usuarios;
res.render('dashboard', {usuario})
}


module.exports = {
    dashboard
}

// ALTERNATIVA  para dashboard

  // if (usuario) {
    //     res.render('dashboard', {usuario})
    // } else {
    //     res.redirect('/login')
    // }