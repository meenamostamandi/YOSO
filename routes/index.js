// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};

exports.addList = function(req, res){
	console.log("moose");

	// Your code goes here
	name = req.query.name;
	description = req.query.description;

	console.log(name + ", " + description);
	newList = {
								"name": name,
								"description": description,
								"members": "Albert Ke"
							};
	console.log(newList);
	data["lists"].push(newList);

	console.log(data);
	res.redirect('/');//render('index', data);
};
