const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Product_Name: {
        type: String,
        required: true
    },
    Product_Type: {
        type: String, 
        required: true,
    },
    Product_IsHot: {
        type: Boolean,
        required: true
    },
    Product_IsCold: {
        type: Boolean,
        required: true
    },
    Product_IsFrappe: {
        type: Boolean,
        required: true
    },
    Product_Detail: {
        type: String,
        require: true
    },
    Product_Img: {
        type: String,
        required: true
    }
}, { collection: 'products' })

module.exports = mongoose.model('Product', productSchema)