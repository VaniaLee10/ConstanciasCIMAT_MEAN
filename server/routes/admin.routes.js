const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/admin.controller');

router.get('/', adminCtrl.home);
router.get('/save', adminCtrl.createAdmin);

module.exports = router;