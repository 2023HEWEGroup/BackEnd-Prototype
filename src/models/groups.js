const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const groupSchema = new mongoose.Schema({
    header: {
        type: String,
        default: "",
    },
    icon: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        default: "",
    },
    desc: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: [],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    star: {
        type: Number,
        default: 0,
    },
    starUser: {
        type: Array,
        default: [],
    },
    defaultIcon: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        default: [],
    },
    member: {
        type: Array,
        default: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    required: true,
                },
                role: {
                    type: String,
                    enum: ['オーナー', 'アドミン', 'メンバー'],
                    required: true,
                },
            },
        ],
    },
    chat: {
        type: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: "Users",
                },
                chat: {
                    type: String,
                }
            }
        ],
        default: []
    }
},
{timestamps: true})


module.exports = mongoose.model("Groups", groupSchema);