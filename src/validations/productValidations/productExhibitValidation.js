const { body } = require("express-validator");


// 商品出品バリデート処理

exports.productExhibitValidation = [
    body("productName").isLength({min: 1, max: 50}).withMessage("商品名は1~50字である必要があります"),
    body("productName").custom((value) => {
        if (value.trim() === "") {throw new Error("商品名は空白のみの入力が出来ません")};
        return true;
    }),
    body("productImg").custom((value) => {
        if (!(value.length >= 1 && value.length <= 4)) {throw new Error("商品画像は1~4枚である必要があります")};
        return true;
    }),
    body("desc").isLength({max: 500}).withMessage("商品説明文は500字以内です"),
    body("condition").isInt({min: 1, max: 5}).withMessage("コンディションは1~5である必要があります"),
    body("price").isInt({min: 100, max: 9999999}).withMessage("価格は100~9999999円である必要があります"),
];