const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Wishlist", wishlistSchema);
