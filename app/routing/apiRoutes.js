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
        friendData.push(addFriend);
        response.json(addFriend);
    })
}
console.log(friendData)