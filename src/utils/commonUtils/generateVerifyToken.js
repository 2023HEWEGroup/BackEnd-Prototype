const CryptoJS = require("crypto-js");


// 6ケタの認証コードを生成する関数

exports.generateVerifyToken = (req, res, next) => {
    try {
        const token = Math.floor(Math.random() * 900000 + 100000);
        const tokenString = token.toString();
        const hashedToken = CryptoJS.AES.encrypt(tokenString, process.env.AUTH_CODE_HASH_KEY);
        req.token = token;
        req.hashedToken = hashedToken;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}