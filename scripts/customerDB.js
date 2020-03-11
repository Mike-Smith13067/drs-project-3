const mongoose = require("mongoose");
const db = require("../models");

// This file empties the customer collection and inserts the customer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drs-automotive"
);

const customer = [
  {
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
      },
      password: {
        type: String,
        trim: true,
        required: 'Password is required'
      },
      make: {
        type: String
      },
      model: {
        type: String
      },
      vin: {
        type: String
      },
      service: new Date(Date.now()),
      notes: {
        type: String
      },
      admin: false
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
