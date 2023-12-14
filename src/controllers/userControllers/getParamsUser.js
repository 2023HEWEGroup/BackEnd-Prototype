const User = require("../../models/users");


// リクエストパラメータからユーザーを取得する関数

exports.getParamsUser = async (req, res, next) => {
    try {
        let user;
        const userId = req.params._id || req.params.userId;
        if (req.params._id) {
            user = await User.findById(userId);
        } else if (req.params.userId) {
            user = await User.findOne({userId: userId});
        }
        if (!user) {
            return res.status(404).json("ユーザーが見つかりません (params)")
        }
        req.paramsUser = user
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}