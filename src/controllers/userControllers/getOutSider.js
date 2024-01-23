const User = require("../../models/users");
const mongoose = require("mongoose");


// ログイン中のユーザーのうちフォロー中でないユーザーをランダムに取得するミドルウェア (フォロー推奨表示)

exports.getOutsider= async (req, res, next) => {
    try {
        const user = req.paramsUser;
        // フォロー中でないユーザーを最大で12人ランダムに取得 ($nin: 含まれない。自分のID、フォロー中のID)
        const followingIds = user.followings.map(id => new mongoose.Types.ObjectId(id));
        const randomUsers = await User.aggregate([
            { $match: { _id: { $nin: [user._id, ...followingIds] } } },
            { $sample: { size: 12 } }
        ]);
        req.users = randomUsers;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}