const Notify = require("../../models/notifies");


// ログインユーザーの通知をスクロールの度に取得(refのpopulateにより送信者の情報も取得)

exports.getScrollNotify = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const { page, pageSize } = req.query;
        const userNotifies = await Notify.find({ to: user._id })
        .populate("from")
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.userNotifies = userNotifies;
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}