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
    make: "Jeep",
    model:"2006 Wrangler X",
    vin: "xxxxx",
    service: new Date(Date.now()),
    notes: "asf"
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
