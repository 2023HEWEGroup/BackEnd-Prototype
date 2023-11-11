const User = require("../../models/users");


// 電話番号からユーザーを取得する関数

exports.getPhoneUser = async (req, res, next) => {
    try {
        const phoneNumber = req.params.phoneNumber;
        const user = await User.findOne({phoneNumber: phoneNumber});
        if (!user) {
            return res.status(404).json("ユーザーが見つかりません (phone)")
        }
        req.phoneUser = user
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}