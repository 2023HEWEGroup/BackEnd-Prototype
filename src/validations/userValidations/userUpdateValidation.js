const { body } = require("express-validator");


// ユーザーアップデートバリデート処理

exports.userUpdateValidation = [
    body("username").isLength({min: 1, max: 30}).withMessage("ユーザーネームは1~30字である必要があります"),
    body("username").custom((value) => {
        if (value.trim() === "") {throw new Error("ユーザーネームは空白のみの入力が出来ません")}
        return true;
    }),
    body("desc").isLength({max: 500}).withMessage("プロフィール文は500字以内です"),
]