const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
});

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;
