var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

var userSchema = user.Schema({
    name: {
    	first: String,
    	last: String
    },
    email: String,
    password: String
});
userSchema.virtual('name.full').get(function() {
	return this.name.first + ' ' + this.name.last;
});

var User = mongoose.model('User', userSchema);

var brett = new User({ 
	name: {
		first: 'Brett', 
		last: 'Parsekian'
	},
	email: 'bparseki@ucsd.edu', 
	password: 'hahaha' });

brett.save(function (err, brett) {
  if (err) // TODO handle the error
});

