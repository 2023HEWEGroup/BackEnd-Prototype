const CryptoJS = require("crypto-js");


// パスワードを認証する関数

exports.verifyPassword = (req, res, next) => {
    try {
        const password = req.body.password;
        const user = req.bodyUser;
        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        if (decryptedPassword !== password) {
            return res.status(401).json("パスワードが無効です");
        }
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}