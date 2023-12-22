const User = require("../../models/users");


// クレジットカード情報削除処理

exports.settingCreditCardDeleteHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        await User.updateOne(
            { _id: user._id},
            { creditCard: {
                cardName: "",
                number: "",
                cvc: "",
                expiry: "",
            }},
            );
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}