const Product = require("../../models/products");

// 適用可能なコードとポイントの対応
const ENABLE_CODE_LIST = {
    "1111111111111111": 1000,
    "2222222222222222": 2000,
    "3333333333333333": 3000,
    "4444444444444444": 4000,
    "5555555555555555": 5000,
    "6666666666666666": 6000,
    "7777777777777777": 7000,
    "8888888888888888": 8000,
    "9999999999999999": 9000,
    "0000000000000000": 10000,
}


// 指定個数の商品を重複無しのランダムで取得するミドルウェア

exports.getIsCodeexistence = async (req, res, next) => {
    try {
        const code = req.body.code;
        if (!ENABLE_CODE_LIST.hasOwnProperty(code.toString())) {
            return res.status(400).json("このコードはご利用頂けません。もう一度お試し下さい。");
        } else {
            req.point = ENABLE_CODE_LIST[code];
        }
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}