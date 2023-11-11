const { body } = require("express-validator");


// メールアドレスログインバリデート処理

exports.authLoginByEmailValidation = [
    body("password").custom((value) => {
        if (!value.match(/^([a-zA-Z0-9]{8,30})$/)) {throw new Error("パスワードは8~30字の英数字である必要があります")}
        return true;
    }),
    body("email").isEmail().withMessage("正しいメールアドレスを入力して下さい"),
];