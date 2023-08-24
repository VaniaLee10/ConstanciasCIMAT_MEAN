const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/admin.controller');

router.get('/', adminCtrl.home);


module.exports = router;