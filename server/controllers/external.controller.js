const externalCtrl = {};

externalCtrl.login = (req, res) => {
    res.render('login');
}

externalCtrl.buscarUsuario = (req, res) => {
    const user = req.body.username
    const pass = req.body.password

    res.redirect('admin');
}

module.exports = externalCtrl;