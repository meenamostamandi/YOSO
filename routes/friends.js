var data = require("../data.json");

exports.listAll = function(req, res) {
	res.json(data);
}
