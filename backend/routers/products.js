const express = require("express");
// var app = express();
const mongoose = require("mongoose");
const products = express.Router();
const Product = require("../models/product.js");
//const Cart = require("../models/cart.js");
const cors = require("cors");
products.use(cors());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

products.post("/products", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product + " created product");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
products.get("/getProduct", (req, res) => {
  Product.find({}, (err, result) => {
    console.log(result);
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
products.get("/getProductsWithCategory/:category", (req, res) => {
  console.log('we are here')
  Product.find({ category: req.params.category }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
// products.post("/cart", (req, res) => {
//   console.log("product", req.body);
//   Cart.create({
//     productName: req.body.productName,
//     productPrice: req.body.productPrice,
//     quantity: req.body.quantity,
//   })
//     .then((product) => {
//       res.send(product);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = products;