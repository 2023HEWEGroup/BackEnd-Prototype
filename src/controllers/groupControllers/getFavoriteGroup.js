const Group = require("../../models/groups");


// グループを人気順にページネーション対応で取得する関数

exports.getFavoriteGroup = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const groups = await Group.find()
        .sort({ star: -1 }) // 人気順
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize))
        req.groups = groups;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}