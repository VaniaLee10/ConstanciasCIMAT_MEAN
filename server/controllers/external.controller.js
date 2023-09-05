const externalCtrl = {};
const AdminModel = require('../models/admin');

externalCtrl.login = (req, res) => {
    res.render('login');
}

externalCtrl.buscarUsuario = (req, res) => {
    const user = req.body.username
    const pass = req.body.password

    const userFind = AdminModel.findOne({ 'user': user });

    if (!userFind) {
        res.json({
            "status": "0"
        });
    } else {
        if (AdminModel.validatePassword(pass)) {
            res.redirect('admin');
        } else {
            res.json({
                "status": "0"
            });
        }
    }
}

module.exports = externalCtrl;