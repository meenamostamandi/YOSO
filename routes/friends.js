var data = require("../data.json");

exports.listAll = function(req, res) {
	res.json(data);
}

exports.friendDelete = function(req, res) {
	name = req.params.friend;
	console.log(name);
	delete data["friends"][name];
	res.redirect('/');
}
