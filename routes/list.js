var data = require('../data.json');

exports.listAll = function(req, res) {
	res.json(data);
}

exports.listContents = function(req, res) {
	res.json(data["lists"][req.params.list]["contents"]);
}

exports.listInfo = function(req, res) { 
 	res.json(data["lists"][req.params.id]);
}

exports.listAdd = function(req, res) {
	name = req.query.name;
	description = req.query.description;
	newList = {
								"name": name,
								"description": description,
								"members": "Albert Ke"
						};

	data["lists"][name] = newList;
	res.redirect('/');
}

exports.listDelete = function(req, res) {
	res.json(data);
}

exports.itemAdd = function(req, res) {
	list = req.params.list;
	console.log(list);
	name = req.query.name;
	quantity = req.query.quantity;
	newItem = {
								"name": name,
								"quantity": quantity,
								"complete": false
				 		};

	data["lists"][list]["contents"][name] = newItem;
	console.log(data);
	res.redirect('/');
}

exports.itemDelete = function(req, res) {
	res.json(data);
}

