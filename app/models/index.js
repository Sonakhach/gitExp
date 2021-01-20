const mongoose = require('mongoose')
const db = {}

db.mongoose = mongoose;
db.user = require('./userModel');
db.role = require('./roleModel');
db.ROLES = ['user','admin','moderator'];

module.exports = db;