var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema({
	email: {type: String, unique: true, sparse: true, trim: true},
	reg_email: {type: String, unique: true, sparse: true, trim: true},
	is: {},
	password: {type: String},
	avatarUrl: {type: String, default: '/api/user/default.png'},
	name: {type: String},
	generated: {type: Boolean, default: false},
	data: {},
}, {minimize: false});
schema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
schema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};
schema.methods.create = function(obj, user, sd) {
	this.avatarUrl = obj.avatarUrl || '/api/user/default.png';
	this.generated = obj.generated;
	this.reg_email = obj.email;
	this.email = obj.email;
	this.name = obj.name;
	this.data = {};
	this.is = {}
}
module.exports = mongoose.model('User', schema);