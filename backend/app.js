const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')


const user = require('./routers/User')

mongoose
.connect('mongodb+srv://camping:@khaoulabensaid@cluster0-3qj0d.mongodb.net/market?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("Connected successfully !"))
.catch(() => console.log("not connected !"));

app.use(cors())
app.use(bodyParser.json());

app.use('/user',user)
app.get('/',(req,res)=>res.send('hello from server'));


module.exports = app; 