const User = require("../../models/users");


// ユーザーアップデート処理

exports.userUpdateHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        await User.updateOne({ _id: user._id}, { $set: req.body } );
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}