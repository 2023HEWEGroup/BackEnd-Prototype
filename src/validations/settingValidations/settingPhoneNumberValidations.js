const { body } = require("express-validator");
const User = require("../../models/users");


// 携帯電話番号バリデート処理

exports.settingPhoneNumberValidations = [
    body("phoneNumber").notEmpty().withMessage("電話番号を入力して下さい"),
    body("phoneNumber").isMobilePhone("ja-JP").withMessage("正しい電話番号を入力して下さい"),
    body("phoneNumber").custom((value) => {
        return User.findOne({phoneNumber: value}).then((user) => {
            if (user) {return Promise.reject("この電話番号はすでに使用されています")}
        })
    }),
];