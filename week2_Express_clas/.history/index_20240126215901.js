const express = require("express");

const app = express();

function (n) {
    let ans=0;
    for(leti=0;i<n;i++) {
        ans+=i;
    }
    
}
app.get("/", function(req,res) {
        res.send("Hello World");
});
app.listen(3000);