var data = require("../friends.json");

exports.view = function(req, res){
	console.log(data);
	//res.render('friends', data);
	res.redirect('/friends');
};

exports.addFriend = function(req, res) {   
	// Your code goes here
	name = req.query.name;
	email = req.query.email;

	newFriend = {
		"name": name,
		"email": email,
		"image": "http://lorempixel.com/300/300/people"
	};
	
	console.log(newFriend);
	data["friends"].push(newFriend);

	console.log(data);
	res.render('friends', data);
};
