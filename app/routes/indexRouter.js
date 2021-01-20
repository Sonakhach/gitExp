const express = require('express');
const {authjwt} = require('../middlewares');

const router = express.Router();
const {index} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
// router.get('/', index);

module.exports = router;
