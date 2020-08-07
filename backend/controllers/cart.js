const Cart = require("../models/cart.js");

exports.getCarts = (req, res) => {
  Cart.find({}, function (err, product) {
    if (err) {
      console.error(err);
    }
    console.log(product);
    res.send(product);
  });
};

exports.deleteCarts = (req, res) => {
  Cart.findOneAndDelete({}, function (err, product) {
    if (err) {
      console.error(err);
    }
    res.end();
  });
};
