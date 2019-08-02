//Require the dependencies. These are npm packages
// =============================================================
var express = require("express");

//Setting Up Express App. This sets up the basic properties for our express server
// ============================================================
//This tells node that we are creating an "express" server
var app = express();
//Sets an initial port for listener
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('app/public'));

//Router. Points the server to a series of "route" files
//These routes give our server a "map" of how to respond when users visit or request data from various URLs.

//Dependencies for Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server Listener
// The below code effectively "starts" our server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT + ".");
})