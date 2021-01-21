const express = require('express');
const {authjwt} = require('../middlewares');

const router = express.Router();
const {index} = require('../controllers/indexController');
// const controller = require('../controllers/userController');
/* GET home page. */
router.get('/', index);
// router.get('/', index);
// router.get('/all', controller.allAccess )

module.exports = router;



