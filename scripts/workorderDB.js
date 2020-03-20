const mongoose = require("mongoose");
const db = require("../models");

// This file empties the customer collection and inserts the customer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drs-automotive"
);

const workorder = [
  {
    type: "Part",
    description: "Valve Cover Gasket w/ grommets",
    partnumber: "53020758AC",
    qty: 1,
    hrs: 1.5,
    price: 40.36,
    rate: 80.00,
  },
];

db.WorkOrder
 db.WorkOrder.collection.insert(workorder)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });