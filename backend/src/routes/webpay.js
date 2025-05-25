const express = require('express');
const router = express.Router();
const { simularPago } = require('../controllers/webpayController');

router.post('/pagar', simularPago);

module.exports = router;
