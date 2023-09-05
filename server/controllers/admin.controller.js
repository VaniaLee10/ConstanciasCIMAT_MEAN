const adminCtrl = {};
const AdminModel = require('../models/admin');

adminCtrl.home = (req, res) => {
    res.render('tabla.ejs');
}

adminCtrl.createAdmin = async (req, res) => {
    const newUser = new AdminModel();
    newUser.user = "Vani";
    newUser.pass = "Vani1";
    newUser.save();

    res.json(newUser);
}

module.exports = adminCtrl;