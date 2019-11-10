const express = require("express");
const path = require("path");
const friends = require("./app/data/friends.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});