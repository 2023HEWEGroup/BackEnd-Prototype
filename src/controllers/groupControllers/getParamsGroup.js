const Group = require("../../models/groups");


// リクエストパラメータからグループを取得する関数

exports.getParamsGroup = async (req, res, next) => {
    try {
        const group = await Group.findById(req.params.groupId)
        .populate('owner', ['username']);
        if (!group) {
            return res.status(404).json("グループが見つかりません (params)")
        }
        req.paramsGroup = group;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}