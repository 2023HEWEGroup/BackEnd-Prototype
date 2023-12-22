const User = require("../../models/users");


// ポイントチャージ処理

exports.settingChargeHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        await User.updateOne({ _id: user._id}, { points: user.points + req.body.point});
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}