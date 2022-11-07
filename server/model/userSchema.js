const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
    },
    contact: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    enc_password: {
      type: String,
      required: true,
    },
    salt: String,
    aadharCardPhoto: {
      data: Buffer,
      contentType: String,
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid();
    this.enc_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.enc_password;
  },

  securePassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha512", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
