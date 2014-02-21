var data = require("../data.json");

exports.listAll = function(req, res) {
	res.json(data);
};

exports.friendAdd = function(req, res) {
	firstname = req.query.firstname;
	lastname = req.query.lastname;
	email = req.query.email;

	newFriend = {
								"first-name": firstname,
								"last-name": lastname,
								"email": email
							};

	data["friends"][firstname + ' ' + lastname] = newFriend;

	res.redirect('/');
};

exports.friendDelete = function(req, res) {
	firstname = req.params.firstname;
	lastname = req.params.lastname;
	delete data["friends"][firstname + ' ' + lastname];
	res.redirect('/');
};

