// var express = require('express');
// const passport = require('passport');
// let auth=require('../middlewares/auth')


// var router = express.Router();
// const { registerView, 
//     	registerNewUser, 
//      	loginPageView,
// 		userLogin,
// 		logOut

// 	}=require('../controllers/authController')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.route('/register')
//   .get( registerView)
//   .post(registerNewUser)


// router.route('/login')
// .get(loginPageView)
// .post(passport.authenticate('local', { session:false }),userLogin)


// router.route('/logout')
// .get(logOut)

// router.get('/google',
//   passport.authenticate('google', { 
// 	 session:false,
// 	scope:[ 'email', 'profile' ]
//  }
// ));

// router.get( '/google/callback',
//     passport.authenticate( 'google', { session:false }), userLogin);


// module.exports = router;