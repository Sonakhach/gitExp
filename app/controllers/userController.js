exports.allAccess = (req,res)=>{
	// res.status(200).render('register');
	 res.render('register');
};
exports.userBoard = (req,res)=>{
	res.status(200).send('User Content.');
};
exports.adminBoard = (req,res)=>{
	res.status(200).send('Admin Content.');
	  // res.render('admin');
};
exports.moderatorBoard = (req,res)=>{
	res.status(200).send('Moderator Content.');
};


