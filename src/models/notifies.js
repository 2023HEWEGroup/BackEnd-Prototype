const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const notifySchema = new mongoose.Schema({
    from: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    to: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    class: {
        type: String,
        enum: ['いいね', 'フォロー', 'コメント', '購入', 'キャンセル', '発送', '評価', 'アドミン'],
        required: true,
    },
    main: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
},
{timestamps: true})


module.exports = mongoose.model("Notifies", notifySchema);