const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOrderSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true},
  make: { type: String, required: true },
  model: {type: String, required: true },
  vin: String,
  mileage: String,
  lastSereviceDate: { type: Date, default: Date.now },
  notes: String
});

const WorkOrder= mongoose.model("WorkOrder", workOrderSchema);

module.exports = WorkOrder;