const mongoose = require("mongoose");

const distributorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 32,
      require: true,
      trim: true,
    },
    Bio: {
      type: String,
      maxlength: 200,
      require: true,
    },
    Address: {
      type: String,
      require: true,
    },
    Contact: {
      type: Number,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Distributor", distributorSchema);
