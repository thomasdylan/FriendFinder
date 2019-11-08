const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});