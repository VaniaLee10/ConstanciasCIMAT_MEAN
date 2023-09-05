const externalCtrl = {};
const Herramientas = require('./herramientas');

const AdminModel = require('../models/admin');

externalCtrl.login = (req, res) => {
    res.render('login');
}

externalCtrl.buscarUsuario = async (req, res) => {
    const user = req.body.username
    const pass = req.body.password

    const userFind = await AdminModel.findOne({ 'user': user });
    if (!userFind) {
        res.json({
            "status": "0"
        });
    } else {
        const passUser = userFind.pass === undefined ? null : userFind.pass;
        if (passUser != null && Herramientas.validatePassword(pass, passUser)) {
            res.redirect('admin');
        } else {
            res.json({
                "status": "0"
            });
        }
    }
}

module.exports = externalCtrl;