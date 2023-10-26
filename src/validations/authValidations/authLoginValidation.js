const { body } = require("express-validator");


// ログインバリデート処理

exports.authLoginValidation = [
    body("userId").custom((value) => {
        if (!value.match(/^([a-zA-Z0-9_]{3,30})$/)) {throw new Error("ユーザーIDは3~30字の英数字か_である必要があります")}
        return true;
    }),
    body("password").custom((value) => {
        if (!value.match(/^([a-zA-Z0-9]{8,30})$/)) {throw new Error("パスワードは8~30字の英数字である必要があります")}
        return true;
    }),
];