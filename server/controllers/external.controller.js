const externalCtrl = {};
const AdminModel = require('../models/admin'); 

externalCtrl.login = (req, res) => {
    res.render('login');
}

externalCtrl.buscarUsuario = (req, res) => {
    const user = req.body.username
    const pass = req.body.password

    AdminModel.findOne({'user': user}, function (err, user) {
        if(!userFind){
            res.json({
                "status" : "0"    
            });
        }else{
            if(AdminModel.validatePassword(pass)){
                res.json(userFind);
            }else{
                res.json({
                    "status" : "0"
                });
            }
        }
    })

    res.redirect('admin');
}

module.exports = externalCtrl;