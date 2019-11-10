let friendsList = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        var friend = friendsList[0].name;
        var totalDifference = 0;
        var difference = 1000;
        var scores = req.body.scores;

        for(var i = 0; i < friendsList.length; i++) {
            totalDifference = 0;
            for(var j = 0; j < scores.length; j++) {
                totalDifference += Math.abs(parseInt(scores[j]) - parseInt(friendsList[i].scores[j]));
            };
            if(totalDifference < difference) {
                friend = friendsList[i].name;
                difference = totalDifference;
            };
        };

        console.log(friend);
        friendsList.push(req.body);
    });

    

};