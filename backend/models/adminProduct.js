const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32
    },
    category: {
        type:String
    },
    quantity: {
        type: Number
    },
    photoUrl: {
        type: String,
    }
})

module.exports = Product = mongoose.model("Product", productSchema);