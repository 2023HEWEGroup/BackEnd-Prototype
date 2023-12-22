const User = require("../../models/users");
const CryptoJS = require("crypto-js");


// クレジットカード情報更新処理

exports.settingCreditCardUpdateHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        await User.updateOne(
            { _id: user._id},
            { creditCard: {
                cardName: req.body.cardName,
                number: CryptoJS.AES.encrypt(req.body.number, process.env.CREDIT_CARD_NUMBER_KEY).toString(),
                cvc: CryptoJS.AES.encrypt(req.body.cvc, process.env.CREDIT_CARD_CVC_KEY).toString(),
                expiry: req.body.expiry,
            }},
            );
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}