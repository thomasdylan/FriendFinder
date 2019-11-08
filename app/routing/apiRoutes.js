const path = require("path");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {
        var friend = req.body;
        friends.push(friend);
        res.json(friend);
    });

}