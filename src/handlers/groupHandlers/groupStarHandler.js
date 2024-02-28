const Group = require("../../models/groups");


// グループお気に入りもしくはお気に入り解除処理

exports.groupStarHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        const user = req.bodyUser;
        if (!group.starUser.includes(user._id)) {
            await group.updateOne({
                $push: {
                    starUser: user._id.toString()
                }
            })
        } else {
            await group.updateOne({
                $pull: {
                    starUser: user._id.toString()
                }
            })
        }
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}