// Links to a source file with an array of friendsData ===================================================================
var climberData = require("../data/friends");

// Sets up a routing function that connects to an html file ==============================================================
module.exports = function(app) {

// Connects to an array on a javascript file and gets any data ===========================================================
	app.get("/api/friends", function(req, res) {
    	res.json(climberData);
    	console.log("this is working");
  	});

// Takes in user input data, converts it to json and posts it to the array  ==============================================
	app.post("/api/friends", function(req, res) {
		console.log(req.body, "req.body");
// Compare the user input to the existing profiles to find the best match ================================================		
// Not yet working !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!		
		var bestMatch = {
		name: "",
		photo: "",
		friendDifference: Infinity
	};
		//create an empty variable for matches
		var userData = req.body;
		var userScores = userData.scores;
		var climberDataScores = climberData[0].scores;
		var scoreDifference = [];
		var resultsArray = [];
		// var finalUserScores = parseInt(userScores);

		for (var i = 0; i < userScores.length; i++) {
			scoreDifference.push( climberDataScores[i] - userScores[parseInt(i)]);
		}
		console.log("Score Difference", scoreDifference);
		resultsArray = scoreDifference.reduce(function (a,b) {
			return a + b
		}, 0);


		// console.log("ClimberData", climberData);
		// console.log("User Data Scores", userData.scores);
		// console.log("ClimberDataScores", climberDataScores);
		// console.log("userScores", userScores);
		// console.log("finalUserScores", finalUserScores);
		console.log(resultsArray);
		return resultsArray;







	// // 	//create a forloop  that loops through the new user array and compares to the total data array.
	// 	alert(userData);
	// 	alert(userScores);
	// 	//calcuate the difference 
	// 	totalDifference <= Math.abs(parsInt) //the rest of it too.


		// find the least differeces and then push to html


//this part is definitly working.
		climberData.push(req.body);
		res.json(true);
	});
};