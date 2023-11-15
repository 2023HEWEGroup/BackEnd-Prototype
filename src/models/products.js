const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        min: 1,
        max: 50
    },
    desc: {
        type: String,
        max: 500,
        default: ""
    },
    price: {
        type: Number,
        required: true,
        min: 300,
        max: 9999999
    },
    sellerId: {
        type: String,
        required: true,
    },
    groupId: {
        type: String,
        default: null
    },
    condition: {
        type: String,
        required: true,
    },
    shippingArea: {
        type: String,
        required: true,
    },
    deliveryCost: {
        type: String,
        required: true,
    },
    productImg: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    likes: {
        type: Array,
        default: []
    },
    purchasingId: {
        type: String,
        default: null
    },
    isSend: {
        type: Boolean,
        default: false
    },
    isSold: {
        type: Boolean,
        default: false
    },
},
{timestamps: true})


module.exports = mongoose.model("Products", productSchema);