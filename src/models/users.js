const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    upperName: {
        type: String,
        required: true,
    },
    lowerName: {
        type: String,
        required: true,
    },
    upperNameKana: {
        type: String,
        required: true,
    },
    lowerNameKana: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
        trim: true
    },
    prefecture: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    town: {
        type: String,
        trim: true
    },
    houseNumber: {
        type: String,
        default: "",
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    icon: {
        type: String,
        default: ""
    },
    header: {
        type: String,
        default: ""
    },
    defaultIcon: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        max: 500,
        default: ""
    },
    points: {
        type: Number,
        default: 0
    },
    theme: {
        type: String,
        default: "ダークブルー",
    },
    followings: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    blockUsers: {
        type: Array,
        default: []
    },
    likes: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    purchasings: {
        type: Array,
        default: []
    },
    purchased: {
        type: Array,
        default: []
    },
    groups: {
        type: Array,
        default: []
    },
    authToken: {
        hashedToken: {
            type: String,
            default: ""
        },
        createdAt: {
            type: Date,
            default: null
        },
        unverifiedEmail: {
            type: String,
            default: ""
        }
    },
    creditCard: {
        cardName: {
            type: String,
            default: "",
        },
        number: {
            type: String,
            default: "",
        },
        cvc: {
            type: String,
            default: "",
        },
        expiry: {
            type: String,
            default: "",
        },
    },
    isAuthorized: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{timestamps: true})


module.exports = mongoose.model("User", userSchema);