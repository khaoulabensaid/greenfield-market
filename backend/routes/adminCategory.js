const express = require("express");
const router = express.Router();
const categoryContrl = require('../controllers/adminCategory')


router.get('/categories', categoryContrl.getAllCategories);
router.post('/add/category', categoryContrl.addCategory);
router.get('/category/:category', categoryContrl.getOneCategory);
router.delete('/delete/category/:category', categoryContrl.deleteCategory);



module.exports = router;