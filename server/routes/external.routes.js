const express = require('express');
const router = express.Router();

const externalCtrl = require('../controllers/external.controller');

router.get('/', externalCtrl.login);
router.post('/', externalCtrl.buscarUsuario);
router.post('/registro', externalCtrl.createUser);

module.exports = router;