const Group = require("../../models/groups");
const User = require("../../models/users");


// グループのメンバー情報をフェッチするミドルウェア

exports.getGroupMembers = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const group = req.paramsGroup;
        const members = await User.find({_id: {$in: group.member}})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.members = members;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}