const Group = require("../../models/groups");


// グループアップデート処理

exports.groupUpdateHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        await Group.updateOne({ _id: group._id}, { $set: req.body } );
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}