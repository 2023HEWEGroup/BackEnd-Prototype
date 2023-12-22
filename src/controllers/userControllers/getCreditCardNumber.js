const CryptoJS = require("crypto-js");


function maskDigits(number) {
    // 数字を文字列に変換し、最後の4文字以外を伏せる
    const maskedNumber = '*'.repeat(number.toString().length - 4) + number.toString().slice(-4);
    return maskedNumber;
}


// クレジットカード番号を取得する関数

exports.getCardNumber = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const hashedNumber = CryptoJS.AES.decrypt(user.creditCard.number, process.env.CREDIT_CARD_NUMBER_KEY).toString(CryptoJS.enc.Utf8);
        const maskedNumber = maskDigits(hashedNumber);
        req.number = maskedNumber;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}