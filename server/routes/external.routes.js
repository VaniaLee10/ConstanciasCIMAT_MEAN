const express = require('express');
const router = express.Router();

const externalCtrl = require('../controllers/external.controller');

router.get('/', externalCtrl.login);
router.post('/', externalCtrl.buscarUsuario);
router.get('/registro', externalCtrl.registro);


module.exports = router;