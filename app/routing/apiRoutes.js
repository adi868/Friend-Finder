// Loading Data
// Linking routes to a series of "data" sources
// Linking the friends.js file which contains the friend data array information
var friendData = require("../data/friends");

// API GET Requests
// Routing
// Below code handles when users "visit" a page.

module.exports = function(app) {
  app.get("/api/friends", function(request, response) {
    response.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server
  // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array

  // Adding new friend information via POST request
  app.post("/api/friends", function(request, response) {
    var userInputMessageBodyObject = request.body;
    var totalDifference = 0;
    var result = 0;
    //make a new array to store another array of objects with
    //total difference in the scores
    var newTable = [];
    //outer for loop to iterate the entire array of object from table
    for (var i = 0; i < friendData.length; i++) {
      //reset the total difference for the next object person
      totalDifference = 0;
      //inner for loop to calculate the new Person from the user Input off req.body
      for (var j = 0; j < userInputMessageBodyObject.scores.length; j++) {
        //subtract each object score from first element to the last element of the array
        result =
          parseFloat(friendData[i].scores[j]) -
          parseFloat(userInputMessageBodyObject.scores[j]);
        totalDifference += Math.abs(result);
      }
      //inserts into a new array of object for sorting the least total difference
      newTable.push({
        name: friendData[i].name,
        totalDifference: totalDifference,
        photo: friendData[i].photo
      });
    }
    //add a new person to our table from
    //userInput that is stored in req.body
    friendData.push(userInputMessageBodyObject);

    //sorts the new array of object against the total difference
    newTable.sort(function(a, b) {
      return a.totalDifference - b.totalDifference;
    });
    console.log(newTable);

    //returns first element and response back the total least difference to the client during the post request
    response.json(newTable[0]);
  });
};
