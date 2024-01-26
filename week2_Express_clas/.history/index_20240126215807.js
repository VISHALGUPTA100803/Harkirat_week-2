const express = require("express");

const app = express();

function
app.get("/", function(req,res) {
        res.send("Hello World");
});
app.listen(3000);