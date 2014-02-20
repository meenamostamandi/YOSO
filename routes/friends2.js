var models = require('../models');

exports.view = function(req, res) {
	models.Friends
		.find()
		.sort('-name')
		.exec(displayFriends);

	function displayFriends(err, friends) {
		if(err) console.log(err);
		//res.json()
	}
}

exports.deleteFriend = function(req, res) {
	var projectID = req.params.id;
	models.Friends
		.find()
}
