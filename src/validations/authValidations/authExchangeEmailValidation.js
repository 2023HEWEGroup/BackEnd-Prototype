const { body } = require("express-validator");
const User = require("../../models/users");


// メールアドレス変更バリデート処理

exports.authExchangeEmailValidation = [
    body("unverifiedEmail").custom((value, { req }) => {
        if (req.paramsUser.email === value || req.paramsUser.authToken.unverifiedEmail === value) {throw new Error("メールアドレスが変更されていません")}
        return true; 
    }),
    body("unverifiedEmail").notEmpty().withMessage("メールアドレスを入力して下さい"),
    body("unverifiedEmail").isEmail().withMessage("正しいメールアドレスを入力して下さい"),
    body("unverifiedEmail").custom((value) => {
        return User.findOne({$or : [{email: value}, {"authToken.unverifiedEmail": value}]}).then((user) => {
            if (user) {return Promise.reject("このメールアドレスはすでに使用されています")}
        })
    }),
    body("confirmEmail").notEmpty().withMessage("確認用メールアドレスを入力して下さい"),
    body("confirmEmail").isEmail().withMessage("正しい確認用メールアドレスを入力して下さい"),
    body("confirmEmail").custom((value, { req }) => {
        if (value !== req.body.unverifiedEmail) {throw new Error("メールアドレスが一致しません")}
        return true;
    }),
];