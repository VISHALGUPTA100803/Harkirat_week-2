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
    name: "john",
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
  const numberOfKidneys = johnKidneys.length;
  //   let numberOfHealthyKidneys = 0;
  //   for (let i = 0; i < johnKidneys.length; i++) {
  //     if (johnKidneys[i].healthy) {
  //       numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
  //     }
  //   }
  const numberOfHealthyKidneys = johnKidneys.filter(function (kidney) {
    return kidney.healthy;
  }).length;

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
    johnKidneys
});
app.put("/", function (req, res) {});

app.delete("/", function (req, res) {});

app.listen(3000);
