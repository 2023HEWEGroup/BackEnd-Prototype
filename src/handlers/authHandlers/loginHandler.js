const CryptoJS = require("crypto-js");


// ユーザーのログイン処理

const loginHandler = async (req, res) => {
    try {
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}


module.exports = { loginHandler }