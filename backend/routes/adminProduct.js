const express = require("express");
const router = express.Router();
const productContrl = require('../controllers/adminProduct')

router.get('/products', productContrl.getAllProducts);
router.post('/add/product', productContrl.addProduct);
router.put('/modify/product/:name', productContrl.modifyProduct);
router.get('/product/:name', productContrl.getOneProduct);
router.delete('/delete/product/:name', productContrl.deleteProduct);
router.get('/productsByCategory/:category', productContrl.getAllProductsByCategory);

module.exports = router;