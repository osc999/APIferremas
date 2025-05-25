const express = require('express');
const router = express.Router();
const { obtenerTasa } = require('../controllers/divisasController');

router.get('/', obtenerTasa);

module.exports = router;
