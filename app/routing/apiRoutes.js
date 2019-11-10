let friendsList = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        friendsList.push(req.body);
    });

};