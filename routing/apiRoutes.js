var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var totalDiff = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        console.log(userData);
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
    });
};