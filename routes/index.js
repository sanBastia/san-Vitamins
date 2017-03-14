var express = require('express');
var router = express.Router();

const controllers = require('../controllers')

/* GET home page. */
router.get('/', controllers.seed);
router.get('/quote', controllers.quote);


module.exports = router;
