const express = require('express');
const router = express.Router();

const externalCtrl = require('../controllers/external.controller');

router.get('/', externalCtrl.login);
router.post('/', externalCtrl.buscarUsuario);


module.exports = router;