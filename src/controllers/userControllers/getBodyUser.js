const User = require("../../models/users");


// リクエストボディからユーザーを取得する関数

exports.getBodyUser = async (req, res, next) => {
    try {
        let user;
        const userId = req.body._id || req.body.userId;
        if (req.body._id) {
            user = await User.findById(userId);
        } else if (req.body.userId) {
            user = await User.findOne({userId: userId})
        }
        if (!user) {
            return res.status(404).json("ユーザーが見つかりません (body)")
        }
        req.bodyUser = user
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}