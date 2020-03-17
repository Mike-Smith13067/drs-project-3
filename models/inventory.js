const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryItemSchema = new Schema({

  partnumber: { type: String},
  name: { type: String, required: true },
  max: { type: String, required: true },
  min: {type: String, required: true },
  notes: String
},
{collection: "inventory"}
);

const Inventory = mongoose.model("Inventory", inventoryItemSchema);

module.exports = Inventory;