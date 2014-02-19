var data = require('../data.json');

exports.listAll = function(req, res) {
	res.json(data);
}

exports.listContents = function(req, res) {
	res.json(data["lists"][req.params.id]["contents"]);
}

exports.listInfo = function(req, res) { 
 	res.json(data["lists"][req.params.id]);
}
