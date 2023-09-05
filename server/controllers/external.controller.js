const externalCtrl = {};
const AdminModel = require('../models/admin');
const bcrypt = require('bcrypt-nodejs');

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
        console.log(passUser)
        console.log(userFind.user)
        if (passUser != null && passUser == pass) {
            res.redirect('admin');
        } else {
            res.json({
                "status": "0"
            });
        }
    }
}

validatePassword = (password, pass) => {
	return bcrypt.compareSync(password, pass);
};

generateHash = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = externalCtrl;