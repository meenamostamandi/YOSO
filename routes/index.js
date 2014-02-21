var data = require('../data.json');

exports.view = function(req, res) {
	res.render('index', data);
};

exports.tab = function(req, res) {
console.log(data["tab"]);
	res.json(data["tab"]);
};
