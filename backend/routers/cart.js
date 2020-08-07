const express = require("express");
const carts = express.Router();
const Cart = require("../controllers/cart.js");

carts.get("/addTocart", Cart.getCarts);
carts.delete("/cart", Cart.deleteCarts);

module.exports = carts;
