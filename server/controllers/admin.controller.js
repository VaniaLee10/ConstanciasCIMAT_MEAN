const adminCtrl = {};

adminCtrl.home = (req, res) => {
    res.render('tabla.ejs');
}

module.exports = adminCtrl;