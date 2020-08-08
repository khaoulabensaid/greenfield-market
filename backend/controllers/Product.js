const Product = require("../models/product.js");

exports.creatProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product + " created product");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};

exports.getProductAll = (req, res) => {
  Product.find({}, (err, result) => {
    console.log(result);
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.filtreProduct = (req, res) => {
  console.log("we are here");
  Product.find({ category: req.params.category }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.postOnCart = (req, res) => {
  console.log("product", req.body);
  Cart.create({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    quantity: req.body.quantity,
  })
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.send(err);
    });
};
