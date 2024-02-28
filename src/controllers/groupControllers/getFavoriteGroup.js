const Group = require("../../models/groups");


// グループを人気順にページネーション対応で取得する関数

exports.getFavoriteGroup = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const groups = await Group.aggregate([
            {
                $addFields: {
                    starUserCount: { $size: "$starUser" } // 配列の長さをフィールドに追加
                }
            },
            {
              $sort: { starUserCount: -1 } // 長さに基づいて降順でソート
            },
            {$skip: (page - 1) * Number(pageSize)},
            {$limit: Number(pageSize)}
        ]);
        req.groups = groups;
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}