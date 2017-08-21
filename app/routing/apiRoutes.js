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

// Compare the user input to the existing profiles to find the best match ================================================		
// Not yet working !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!		
		var bestMatch = {
		name: "",
		phot: "",
		friendDifference: Infinity
	};
		//create an empty variable for matches
		var userData = req.body;
		var userScores = userData.scores;
		//create a forloop  that loops through the new user array and compares to the total data array.

		//calcuate the difference 
		totalDifference <= Math.abs(parsInt) //the rest of it too.


		// find the least differeces and then push to html


//this part is definitly working.
		climberData.push(req.body);
		res.json(true);
	});
};