var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
       
        var userData = req.body;
        console.log(userData);
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            score: b
        };
        console.log(userData);
        console.log("Name: " + userName);
        console.log("User score " + userScores);

        var leastDiff  = 41;
        var index = 0;
        for (var i = 0; i < friends.length; i++) {
            var currentDiff = 0;
            for(var j = 0;j < friends[0].score.length; j++){
                currentDiff = currentDiff + Math.abs(friends[i].score[j] - userData.score[j]); 
            }
            if( currentDiff < leastDiff){
                leastDiff = currentDiff;
                index = i; 
            }

        }
           var bestMatch = friends[index];
            console.log(bestMatch);
            friends.push(userData);
            console.log("New User added");
            console.log(userData);
            res.json(bestMatch);
        
        }); 
    };