const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var Product = require("./routers/products.js");
var Category = require("./routers/categories.js");

mongoose
.connect('mongodb+srv://camping:@khaoulabensaid@cluster0-3qj0d.mongodb.net/market?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("Connected successfully !"))
.catch(() => console.log("not connected !"));

app.use(bodyParser.json());



app.use("/", Product);
app.use("/", Category);


module.exports = app; 