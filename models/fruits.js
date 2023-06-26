const mongoose = require("mongoose");
const { Schema } = mongoose;

const fruitSchema = {
  name: { type: String, required: true, unique: true },
  review: { type: String, required: true },
};
exports.Fruit = mongoose.model("Fruit", fruitSchema);
