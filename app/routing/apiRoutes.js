//Linking the friends.js file which contains the friend data array information
var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    })

    //Adding new friend information via POST request
    app.post("/api/friends", function (request, response) {
        var addFriend = request.body;
        friendData.push(addFriend);
        response.json(addFriend);
    })
}