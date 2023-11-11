const User = require("../../models/users");


// パラメータメールアドレスからユーザーを取得する関数

exports.getParamsEailUser = async (req, res, next) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({$or : [{email: email}, {"authToken.unverifiedEmail": email}]});
        if (!user) {
            return res.status(404).json("ユーザーが見つかりません (email)")
        }
        req.emailUser = user
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}