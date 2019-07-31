// Loading Data
// We are linking our routes to a series of "data" sources
// Linking the friends.js file which contains the friend data array information

var friendData = require("../data/friends");

// API GET Requests
// Routing
// Below code handles when users "visit" a page.

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    })

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array

    // Adding new friend information via POST request
    app.post("/api/friends", function (request, response) {
        var addFriend = request.body;
        //stores the total difference
        var totalDiff = 0;
        //stores the result of the total difference
        var result = 0;
        var newTable = []

        console.log("Testing" + addFriend)
        //Iterate through the current users to compare with new person
        for (var i = 0; friendData.length; i++) {
            totalDiff = 0;
            for (j = 0; j < addFriend.scores.length; j++) {
                result = parseFloat(friendData[i].scores[j]) - parseFloat(addFriend.scores[j])
                totalDiff += Math.abs(result)
            }
            newTable.push({
                friendData: friendData[i].name,
                totalDifference: totalDifference,
                photo: friendData[i].photo
            })
        }

        friendData.push(addFriend)
        newTable.sort(function (a, b) {
            return a.totalDiff - b.totalDiff
        })
        console.log(newTable)
        response.json(newTable[0]);

    })
};