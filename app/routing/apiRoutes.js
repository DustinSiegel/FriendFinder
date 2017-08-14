// Links to a source file with an array of friendsData ===================================================================
var climberData = require("../data/friends");

// Sets up a routing function that connects to an html file ==============================================================
module.exports = function(app) {

// Connects to an array on a javascript file and gets any data ===========================================================
	app.get("/api/friends", function(req, res) {
    	res.json(climberData);
  	});

// Takes in user input data, converts it to json and posts it to the array  ==============================================
	app.post("/api/friends", function(req, res) {
		climberData.push(req.body);
		res.json(true);
	});
};