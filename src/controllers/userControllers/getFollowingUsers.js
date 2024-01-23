const User = require("../../models/users");


// あるユーザーのフォローを指定件数ずつ取得するミドルウェア

exports.getFollowingUsers = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const users = await User.find({_id: {$in: req.paramsUser.followings}})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        // ユーザーのフォローした順のインデックスの降順に並び替える
        users.sort((a, b) => {
            const indexA = req.paramsUser.followings.indexOf(a._id.toString());
            const indexB = req.paramsUser.followings.indexOf(b._id.toString());
            return indexB - indexA;
        });
        req.users = users;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}