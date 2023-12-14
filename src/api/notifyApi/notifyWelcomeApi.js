const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { notifyWelcomeHandler } = require("../../handlers/notifyHandlers/notifyWelcomeHandler");
const router = require("express").Router();


// アドミン通知送信API

router.put("/:_id",
    getParamsUser,
    notifyWelcomeHandler,
    (req, res) => {
        return res.status(200).json("通知を送信しました");
    }
)


module.exports = router;