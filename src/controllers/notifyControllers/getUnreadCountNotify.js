const Notify = require("../../models/notifies");


// ログインユーザーの未読通知数を返すAPI (通知マークのバッジ用)

exports.getUnreadCountNotify = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const unreadNum = await Notify.countDocuments({ to: user._id, read: false });
        req.unreadNum = unreadNum;
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}