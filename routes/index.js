var express = require('express');
var router = express.Router();

var add_ch = require('../controller/word_puzzle_controller');

/* GET home page. */
router.post('/insert',add_ch.insert);
router.get('/word_puzzle',add_ch.get_data);

module.exports = router;
