const mongoose = require("mongoose");
const db = require("../models");

// This file empties the customer collection and inserts the customer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drs-automotive"
);

const customer = [
  {
    name: "Mike Smith",
    email: "Hockeydad66@live.com",
    make: "Jeep",
    model: "Wrangler X",
    vin: "XXXX",
    mileage: "XXXXX",
    lastServiceDate: "1/16/2020",
    notes: "Best Customer Ever!!",
    admin: true
    },
];

 
db.Customer
db.Customer.collection.insert(customer)

.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
