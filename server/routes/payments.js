var express = require('express');
var router = express.Router();

const paymentModel = require('../models/payments.model');

/* GET payments listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a payments');
});

module.exports = router;