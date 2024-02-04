const User = require("../../models/users");


// あるユーザーのフォローを指定件数、総数と共に取得するミドルウェア (/followingのヘッダー表示用)

exports.getFollowingHeaderUsers = async (req, res, next) => {
    try {
        const { pageSize } = req.query;
        const num = await User.countDocuments({_id: {$in: req.paramsUser.followings}});
        const users = await User.find({_id: {$in: req.paramsUser.followings}})
        .limit(Number(pageSize));
        // ユーザーのフォローした順のインデックスの降順に並び替える
        users.sort((a, b) => {
            const indexA = req.paramsUser.followings.indexOf(a._id.toString());
            const indexB = req.paramsUser.followings.indexOf(b._id.toString());
            return indexB - indexA;
        });
        req.users = users;
        req.num = num;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}