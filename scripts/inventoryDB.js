const mongoose = require("mongoose");
const db = require("../models");

// This file empties the customer collection and inserts the customer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drs-automotive"
);

const inventory_item = [
  {
    partname: "xxxx",
    name: "Oil 10/40",
    max: "5",
    min: "1",
    notes: "asdf"
  },
];

db.Inventory
 db.Inventory.collection.insert(inventory_item)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
