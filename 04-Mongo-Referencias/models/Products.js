const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 50,
    }
});

const Products = mongoose.model('Products', productsSchema);

model.exports = Products;