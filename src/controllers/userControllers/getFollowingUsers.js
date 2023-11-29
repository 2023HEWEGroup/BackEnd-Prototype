const User = require("../../models/users");


// あるユーザーのフォローを指定件数ずつ取得するミドルウェア

exports.getFollowingUsers = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const users = await User.find({_id: {$in: req.paramsUser.followings}})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.users = users;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}