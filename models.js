var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  "title": String,
  "date": Date,
  "summary": String,
  "image": 
});

var userSchema = new mongoose.Schema({
    name: {
    	first: String,
    	last: String
    },
    email: String,
    password: String,
    friends: []
});
userSchema.virtual('name.full').get(function() {
	return this.name.first + ' ' + this.name.last;
});

personSchema.virtual('name.full').set(function (name) {
  var split = name.split(' ');
  this.name.first = split[0];
  this.name.last = split[1];
});

exports.User = Mongoose.model('User', userSchema);
