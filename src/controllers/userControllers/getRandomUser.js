const User = require("../../models/users");
const mongoose = require("mongoose");


// ユーザーをランダムに取得するミドルウェア(非ログイン&&ユーザーアプローチ表示)

exports.getRandomUser = async (req, res, next) => {
    try {
        // ユーザーを最大で12人ランダムに取得
        const randomUsers = await User.aggregate([{ $sample: { size: 12 } }]);
        req.users = randomUsers;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}