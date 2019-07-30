//Dependencies
var express = require("express");

//Setting Up Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));
//Dependencies For Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Server Listener
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT + ".");
})