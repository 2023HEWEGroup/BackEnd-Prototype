const { body } = require("express-validator");
const User = require("../../models/users");


// 新規登録バリデート処理

exports.settingUserIdValidations = [
    body("userId").custom((value) => {
        if (!value.match(/^([a-zA-Z0-9_]{3,30})$/)) {throw new Error("ユーザーIDは3~30字の英数字か_である必要があります")}
        return true;
    }),
    body("userId").custom((value) => {
        return User.findOne({userId: value}).then((user) => {
            if (user) {return Promise.reject("このユーザーIDはすでに使用されています")}
        })
    }),
];