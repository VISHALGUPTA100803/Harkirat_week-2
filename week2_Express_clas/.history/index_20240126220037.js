const express = require("express");

const app = express();

function sum (n) {
    let ans=0;
    for(leti=0;i<n;i++) {
        ans+=i;
    }
    return ans;
    
}
app.get("/", function(req,res) {
    const n = req.query.n;
    const sum 
        res.send("Hello World");
});
app.listen(3000);