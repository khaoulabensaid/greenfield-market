const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require('./routes/adminProduct');
const categoryRoutes = require('./routes/adminCategory');
// const salesRoutes  = require('./routes/sales')

const cors = require("cors");

const Product = require("./routers/products.js");
const Category = require("./routers/categories.js");
const user = require("./routers/User");
const cart = require("./routers/cart");

mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    "mongodb+srv://camping:@khaoulabensaid@cluster0-3qj0d.mongodb.net/market?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected successfully !"))
  .catch(() => console.log("not connected !"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
// app.use('/api', salesRoutes);
module.exports = app; 
app.use(cors());
app.use(bodyParser.json());

app.use("/", Product);
app.use("/", Category);
app.use('/user',user);
app.get('/',(req,res)=>res.send('hello from server'));


module.exports = app;
