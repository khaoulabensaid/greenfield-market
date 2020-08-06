const express    = require("express");
const categories = express.Router();
const Category = require("../models/category.js");
const categoryController = require("../controllers/Category")

categories.post("/categories", categoryController.createCategory)
categories.get("/getCategory",categoryController.findCategories)

module.exports = categories;