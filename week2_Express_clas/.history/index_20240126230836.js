const express = require("express");

const app = express();

// // function sum (n) {
// //     let ans=0;
// //     for(let i=0;i<n;i++) {
// //         ans+=i;
// //     }
// //     return ans;

// // }
// // app.get("/", function(req,res) {
// //     const n = req.query.n;
// //     const ans = sum(n);
// //         res.send("Hi your ans is " + ans);
// // });

var users = [
  {
    name: "Saurabh",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = kidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json(
    johnKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  )
});

app.post("/", function (req, res) {});
app.put("/", function (req, res) {});

app.delete("/", function (req, res) {});

app.listen(3000);
