const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: { type: String, required: true },
  make: { type: String, required: true },
  model: {type: String, required: true },
  vin: String,
  mileage: String,
  lastSereviceDate: { type: Date, default: Date.now },
  notes: String
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;