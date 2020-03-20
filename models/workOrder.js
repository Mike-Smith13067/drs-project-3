const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkOrderSchema = new Schema({
  type: { type: String, required: true },
  description: { type: String, required: true},
  partnumbr: { type: String, required: true },
  qty: {type: String, required: true },
  hrs: { type: String, required: true },
  price: { type: String, required: true },
  rate: { type: String, required: true },
 extended: { type: String, required: true },
  notes: {String}
});

const WorkOrder= mongoose.model("WorkOrder", WorkOrderSchema);

module.exports = WorkOrder;