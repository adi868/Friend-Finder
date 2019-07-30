//Dependencies
var path = require("path");

//Routes
module.exports = function (app) {
    //Homepage
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get("/:routes", function (request, response) {
        var route = request.params.routes;
        //If survey, gets survey page, if not goes to homepage
        if (route === "survey")
            response.sendFile(path.join(__dirname, "../public/survey.html"));
        else
            response.sendFile(path.join(__dirname, "../public/home.html"));
    })
}