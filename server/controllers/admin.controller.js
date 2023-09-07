const adminCtrl = {};
const Herramientas = require('./herramientas');

const AdminModel = require('../models/admin');

const UserModel = require('../models/usuario');

adminCtrl.home = async (req, res) => {

    const users = await UserModel.find();
    console.log(users);

    res.render('admin/tabla.ejs', {users: users});
}

adminCtrl.createAdmin = async (req, res) => {
    const newUser = new AdminModel();
    newUser.user = "Vani";
    newUser.pass = Herramientas.generateHash('Vani');
    newUser.save();

    res.json(newUser);
}

module.exports = adminCtrl;