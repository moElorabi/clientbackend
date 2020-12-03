const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  //   categoryImageUrl: { type: Text },
});

module.exports = Category = mongoose.model("category", categorySchema);
