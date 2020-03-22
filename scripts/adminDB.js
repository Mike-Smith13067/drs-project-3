const mongoose = require("mongoose");
const db = require("../models");

// This file empties the customer collection and inserts the customer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drs-automotive"
);

const admin = [
  {
    name: "Wayne Smith",
    email: "dwsmith600@gmail.com",
    make: "",
    model: "",
    vin: "XXXX",
    mileage: "XXXXX",
    lastServiceDate: "1/16/2020",
    notes: "Best Owner Ever!!",
    admin: true
    },
];


db.Admin
db.Admin.collection.insert(admin)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

