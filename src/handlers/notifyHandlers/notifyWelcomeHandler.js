const Notifies = require("../../models/notifies");


// ウェルカム個別通知を送信するミドルウェア

exports.notifyWelcomeHandler = async (req, res, next) => {
    try {
        const toUser = req.paramsUser;
        const newNotify = await new Notifies({
            from: process.env.WELCOME_MESSAGE_SENDER_ID,
            to: toUser._id,
            class: "アドミン",
            main: process.env.WELCOME_MAIL_MAIN,
        })
        await newNotify.save();
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}