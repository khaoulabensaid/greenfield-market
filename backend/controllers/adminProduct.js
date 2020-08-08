const Product = require("../models/product");

exports.addProduct = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    photoUrl: req.body.photoUrl,
  });
  product
    .save()
    .then(() => res.status(201).json({ message: "Product added !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyProduct = (req, res, next) => {
  Product.findOneAndUpdate({ name: req.params.name }, req.body, (err, item) => {
    if (err) res.json("can not find or update");
    else {
      res.status(201).json(item);
    }
  });
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({
    name: req.params.name,
  })
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.deleteProduct = (req, res, next) => {
  Product.findOne({ name: req.params.name })
    .then(() => {
      Product.deleteOne({ name: req.params.name })
        .then(() => res.status(200).json({ message: "One Item is deleted!" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllProductsByCategory = (req, res, next) => {
  Product.find({ category: req.params.category }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
