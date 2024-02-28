const Group = require("../../models/groups");


// グループ参加もしくは離脱処理

exports.groupJoinHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        const user = req.bodyUser;
        if (!user.groups.includes(group._id)) {
            await user.updateOne({
                $push: {
                    groups: group._id.toString()
                }
            })
            await group.updateOne({
                $push: {
                    member: { _id: user._id }
                }
            })
        } else {
            await user.updateOne({
                $pull: {
                    groups: group._id.toString()
                }
            })
            await group.updateOne({
                $pull: {
                    member: {
                        _id: user._id
                    }
                }
            })
        }
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}