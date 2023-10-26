const User = require("../../models/users");


// リクエストパラメータからユーザーを取得する関数

exports.getParamsUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json("ユーザーが見つかりません (params)")
        }
        req.paramsUser = user;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}