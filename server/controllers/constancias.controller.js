const constanciaCtrl = {};

constanciaCtrl.getConstancias = (req, res) => {
    res.json({
        status: 'Constancias aqui'
    });
}

constanciaCtrl.createConstancia = (req, res) => {
    res.json({
        status: 'Constancia guardada'
    });
}

constanciaCtrl.getConstancia = (req, res) => {
    res.json({
        status: 'Constancia especifica'
    });
}

constanciaCtrl.editConstancia = (req, res) => {
    res.json({
        status: 'Constancia editada'
    });
}

constanciaCtrl.deleteConstancia = (req, res) => {
    res.json({
        status: 'Constancia eliminada'
    });
}


module.exports = constanciaCtrl;