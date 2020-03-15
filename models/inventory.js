const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryItemSchema = new Schema({
  name: { type: String, required: true },
  max: { type: String, required: true },
  min: {type: String, required: true },
  notes: String
});

const Inventory = mongoose.model("Inventory", inventoryItemSchema);

module.exports = Inventory;