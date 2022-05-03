const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const soilSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 34,
      require: true,
      trim: true,
    },
    typeOfSoil: {
      type: String,
      require: true,
      trim: true,
      maxlength: 32,
    },
    description: {
      type: String,
      require: true,
      maxlength: 2000,
    },
    suitableCrops: {
      type: Array,
      default: [],
    },
    quality: {
      type: String,
      maxlength: 150,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    distributor: {
      type: ObjectId,
      ref: "Distributor",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Soil", soilSchema);
