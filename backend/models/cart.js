const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItem = {
  id: Number,
  productId: Number,
  productName: String,
  qty: Number,
  price: Number,
};

const CartSchemas = new Schema(CartItem);
module.exports = Cart = new mongoose.model("cart", CartSchemas);
