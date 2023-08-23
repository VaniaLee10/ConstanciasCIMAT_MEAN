const express = require('express');
const router = express.Router();

const constanciasCtrl = require('../controllers/constancias.controller');

router.get('/', constanciasCtrl.getConstancias);
router.post('/', constanciasCtrl.createConstancia);
router.get('/:id', constanciasCtrl.getConstancia);
router.put('/:id', constanciasCtrl.editConstancia);
router.delete('/:id', constanciasCtrl.deleteConstancia);


module.exports = router;