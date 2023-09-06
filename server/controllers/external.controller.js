const externalCtrl = {};
const Herramientas = require('./herramientas');

const AdminModel = require('../models/admin');

externalCtrl.login = (req, res) => {
    const error = {
        status: true,
        text: 'No existe el usuario'
    };

    res.render('login', { error: error });
}

externalCtrl.buscarUsuario = async (req, res) => {
    const user = req.body.username
    const pass = req.body.password

    const userFind = await AdminModel.findOne({ 'user': user });
    if (!userFind) {
        const error = {
            status: false,
            text: 'No existe el usuario'
        };

        res.render('login', { error: error });
    } else {
        const passUser = userFind.pass === undefined ? null : userFind.pass;
        if (passUser != null && Herramientas.validatePassword(pass, passUser)) {
            res.redirect('admin');
        } else {
            const error = {
                status: false,
                text: 'No existe pass'
            };

            res.render('login', { error: error });
        }
    }
}

module.exports = externalCtrl;