var mongoose = require("mongoose");
var colorSchema = mongoose.Schema({
  id: Number,
  name: String,
  color: String,
  price: Number,
});

module.exports = mongoose.model("Color", colorSchema);
