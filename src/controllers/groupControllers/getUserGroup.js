const Group = require("../../models/groups");


// あるユーザーの所属しているグループを指定件数ずつ取得するミドルウェア

exports.getUserGroups = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const { page, pageSize } = req.query;
        const groups = await Group.find({_id: {$in: user.groups}})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        // ユーザーのフォローした順のインデックスの降順に並び替える
        groups.sort((a, b) => {
            const indexA = user.groups.indexOf(a._id.toString());
            const indexB = user.groups.indexOf(b._id.toString());
            return indexB - indexA;
        });
        req.userGroups = groups;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}