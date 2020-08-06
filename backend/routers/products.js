const express = require("express");
// var app = express();
const mongoose = require("mongoose");
const products = express.Router();
const Product = require("../models/product.js");
const production = require("../controllers/Product")

products.post("/products", production.creatProduct);
products.get("/getProduct", production.getProductAll);
products.get("/getProductsWithCategory/:category", production.filtreProduct);

module.exports = products;