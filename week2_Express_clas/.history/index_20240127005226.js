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
  //OR
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
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done",
  });
});
app.put("/", function (req, res) {
  // for(let i=0;i<users[0].kidneys.length;i++) {
  //     users[0].kidneys[i].healthy = true;
  // }
  //OR
  users[0].kidneys = users[0].kidneys.map((kidney) => ({
    ...kidney,
    healthy: true,
  }));
  res.json({});
});

app.delete("/", function (req, res) {
  // only if at least one unhealthy kidney is there , else return 411 (wrong input)
  // newKidneys = [];
  // for(let i=0;i<users[0].kidneys.length;i++) {
  //     if(users[0].kidneys[i].healthy) {
  //         newKidneys.push({
  //             healthy: true,
  //         });
  //     }
  // }
  // users[0].kidneys = newKidneys;
  //OR
  if (isThereAtLeastOneUnhealthyKidney) {
    users[0].kidneys = users[0].kidneys
      .filter((kidney) => kidney.healthy)
      .map(() => ({ healthy: true }));
  }
  else {
    res.sendStatus(411);
  }

  res.json({
    msg: "done",
  });
});

function isThereAtLeastOneUnhealthyKidney() {
  let atLeastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
      break;
    }
  }
  return atLeastOneUnhealthyKidney;
}

app.listen(3000);
