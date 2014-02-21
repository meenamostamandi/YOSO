var data = require('../data.json');

exports.listAdd = function(req, res) {
	name = req.query.name;
	description = req.query.description;
	newList = {
								"name": name,
								"description": description,
								"contents": {},
								"members": "Albert Ke"
						};

	data["lists"][name] = newList;
	res.redirect('/');
};

exports.listAll = function(req, res) {
	res.json(data);
};

exports.listContents = function(req, res) {
	console.log(data);
	res.json(data["lists"][req.params.list]);
};

exports.listDelete = function(req, res) {
	name = req.params.list;
	delete data["lists"][name];
	res.redirect('/');
};

exports.itemAdd = function(req, res) {
	list = req.params.list;
	//console.log(list);
	name = req.query.name;
	quantity = req.query.quantity;
	newItem = {
								"name": name,
								"quantity": quantity,
								"complete": "todo"
				 		};

	data["lists"][list]["contents"][name] = newItem;
	//console.log(data);
	res.redirect('/');
};

exports.itemDelete = function(req, res) {
	console.log("itemDelete");
	list = req.params.list;
	item = req.params.item;
	delete data["lists"][list]["contents"][item];
	res.redirect('/');
};

