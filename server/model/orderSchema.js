const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.ObjectId,
      ref: "Property",
    },
    user: {
      type: mongoose.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
