var Mongoose = require('mongoose');

var userSchema = new Mongoose.Schema({
    name: {
    	first: String,
    	last: String
    },
    email: String,
    password: String,
    friends: [],
    lists: [listSchema]
});
userSchema.virtual('name.full').get(function() {
	return this.name.first + ' ' + this.name.last;
});

userSchema.virtual('name.full').set(function (name) {
  var split = name.split(' ');
  this.name.first = split[0];
  this.name.last = split[1];
});

exports.User = Mongoose.model('User', userSchema);


var listSchema = new Mongoose.Schema({
    name: String,
    description: String,
    contents: [contentSchema]
});

var contentSchema = new Mongoose.Schema({
    name: String,
    quantity: String,
    complete: Boolean
});
