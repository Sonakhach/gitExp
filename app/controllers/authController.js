const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const db = require('../models');
const User = db.user;
const Role = db.role;

class authController{
	signUp(erq,res){
		const user = new User({
		   username:req.body.username,
		   email:req.body.email,
		   password:bcrypt.hashSync(req.body.password,8)

		});
		user.save((err,user)=>{
			if(err){
				res.status(500).send({
					message:err
				});
				return;
			}
			if(req.body.roles){
				Role.find({
					name:{$in:req.body.roles}
				}.distinct('_id').exec(
				(err,roles)=>{
					if(err){
					res.status(500).send({message:err});
							return;
					};
					user.roles = roles
					user.save((err)=>{
						if(err){
							res.status(500).send({
								message:err
							});
							return;
						}
					})
					res.send({message:'User was registred successfully!'});
					});
					}else{
						Role.findOne({name:'user'},(err,role)=>{
							if(err){
							res.status(500).send({message:err});
									return;
							};
							user.roles = [role._id]
							user.save((err)=>{
								if(err){
									res.status(500).send({
										message:err
									});
									return;
								}
								res.send({message:'User was registred successfully!'});
							})
								})
							}

		})
	}

	signin(req,res){
		User.findOne({
			username:req.body.username
		}).populate('roles','-_v').exec((err,user)=>{
			if(err){
				return res.status(500).send({message:err})
			}
			if(!user){
				return res.status(404).send({message:'User not found!'})
			}
			let passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
				)
			if(!passwordIsValid){
				return res.status(401).send({
					accessToken:null,
					messag:'Invalid email or password!'
				})
			}
			token.jwt.sign({id:user.id},config.secret,{
			expiresIn:86400//24 hours
			})
			let authorities = [];
			for(let i=0; i<user.roles.length; i++){
				authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
			}
			res.status(200).send({
				id:user._id,
				username:user.username,
				email:user.email,
				roles:authorities,
				accessToken:token
			})
		})
	}
}
module.exports = new authController()