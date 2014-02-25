var data = require('../data.json');

exports.view = function(req, res) {
	if (req.isAuthenticated()) res.render('index', data);
  	else res.redirect('/login');
};

exports.tab = function(req, res) {
console.log(data["tab"]);
	res.json(data["tab"]);
};
