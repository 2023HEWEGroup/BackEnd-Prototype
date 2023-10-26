const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        min: 1,
        max: 50
    },
    productImg: {
        type: Array,
        require: true
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
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    desc: {
        type: String,
        max: 500,
        default: ""
    },
    tags: {
        type: Array,
        default: []
    },
    price: {
        type: Number,
        required: true,
        min: 100,
        max: 9999999
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