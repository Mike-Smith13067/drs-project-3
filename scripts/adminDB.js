const mongoose = require("mongoose");
const db = require("../models");

// This file empties the customer collection and inserts the customer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drs-automotive"
);

const admin = [
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

