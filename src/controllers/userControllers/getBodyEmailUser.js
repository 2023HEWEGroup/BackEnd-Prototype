const User = require("../../models/users");


// リクエストボディメールアドレスからユーザーを取得する関数

exports.getBodyEailUser = async (req, res, next) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({$or : [{email: email}, {"authToken.unverifiedEmail": email}]});
        if (!user) {
            return res.status(404).json("ユーザーが見つかりません (email)")
        }
        req.emailUser = user;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}