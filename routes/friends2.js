var models = require('../models');

exports.view = function(req, res) {
	var userID = req.params.id;
	models.User
		.find({"friends": userID}).sort({name: -1})
		.exec(displayFriends);

	function displayFriends(err, friends) {
		if(err) console.log(err);
    	//res.json(users[req.params.id]["friends"]);
    	res.json(users[0]);
	}
}

exports.addFriend = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  models.User
  	.update({"_id"}, $push: {friends: )

  newProject.save(afterSaved);
  res.send();

  function afterSaved(err) {
    if (err) {
      console.log(err);
      res.send(500);
    }
  }
}

// exports.deleteFriend = function(req, res) {
// 	var projectID = req.params.id;
// 	models.Friends
// 		.find()
// }
