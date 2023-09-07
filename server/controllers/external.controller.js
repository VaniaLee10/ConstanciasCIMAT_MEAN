const externalCtrl = {};
const Herramientas = require('./herramientas');

const AdminModel = require('../models/admin');
const UserModel = require('../models/usuario');

externalCtrl.login = (req, res) => {
    const error = {
        status: true,
        text: '',
        username: ''
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
            text: 'Usuario o Contraseña incorrecta',
            username: user
        };

        res.render('login', { error: error });
    } else {
        const passUser = userFind.pass === undefined ? null : userFind.pass;
        if (passUser != null && Herramientas.validatePassword(pass, passUser)) {
            res.redirect('admin');
        } else {
            const error = {
                status: false,
                text: 'Usuario o Contraseña incorrecta',
                username: user
            };

            res.render('login', { error: error });
        }
    }
}

externalCtrl.createUser = async (req, res) => {

    const nombre = req.body.nombre;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;

    const newUser = new UserModel();

    if (typeof nombre == 'string' && nombre != null ){
        newUser.nombre = nombre;
    }

    if (typeof apellido_paterno == 'string' && apellido_paterno != null){
        newUser.apellido_paterno = apellido_paterno;
    }

    if (typeof apellido_materno == 'string' && apellido_materno != null){
        newUser.apellido_materno = apellido_materno;
    }

    
    newUser.save();
    res.json(newUser);
}

module.exports = externalCtrl;