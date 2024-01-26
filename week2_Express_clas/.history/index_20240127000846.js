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
      }
    ],
  },
];

app.use(express.json()); // for passing data to post request we pass in body this line of code enables to pass data in body
 

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
     
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy : isHealthy,
    })
    res.json({
        msg: "done"
    })
});
app.put("/", function (req, res) {
    // for(let i=0;i<users[0].kidneys.length;i++) {
    //     users[0].kidneys[i].healthy = true;
    // }
    users[0].kidneys = users[0].kidneys.map(kidney => ({ ...kidney, healthy: true }));
    res.json({});
});

app.delete("/", function (req, res) {});

app.listen(3000);
