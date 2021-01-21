var express = require('express');
var router = express.Router();
const {authjwt} = require('../middlewares');
const controller = require('../controllers/userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.use(function(req, res, next){
	res.header(
		'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept');
	next();
});
router.get('/all', controller.allAccess)
// router.get('/user',[authjwt.verifyToken], controller.userBoard)
router.get('/mod',[authjwt.verifyToken, authjwt.isModerator], controller.moderatorBoard)
router.get('/admin',[authjwt.verifyToken, authjwt.isAdmin], controller.adminBoard)

module.exports = router;





