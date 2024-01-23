const User = require("../../models/users");


// あるユーザーのフォロワーを指定件数ずつ取得するミドルウェア

exports.getFollowerUsers = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const users = await User.find({_id: {$in: req.paramsUser.followers}})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        // ユーザーのフォローされた順のインデックスの降順に並び替える
        users.sort((a, b) => {
            const indexA = req.paramsUser.followers.indexOf(a._id.toString());
            const indexB = req.paramsUser.followers.indexOf(b._id.toString());
            return indexB - indexA;
        });
        req.users = users;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}