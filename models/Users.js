const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

var UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 32,
      trim: true,
    },
    lastName: {
      type: String,
      require: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      require: true,
    },

    // TODO: encrypting the password
    encrypt_password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: 0,
    },

    salt: {
      type: String,
    },
    userInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

//mongoose virtual---
UsersSchema.virtual("password")
  .set(function (password) {
    this._password = password; // _private is to show the password is private
    this.salt = uuidv4();
    this.encrypt_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

// mongoose methods -- can be multiple method
UsersSchema.methods = {
  securePassword: function (plainpassword) {
    if (!plainpassword) {
      return "";
    }
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("Users", UsersSchema);
