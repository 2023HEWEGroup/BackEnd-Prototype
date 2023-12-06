const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { authResendMailHandler } = require("../../handlers/authHandlers/authResendMailHandler");
const { generateVerifyToken } = require("../../utils/commonUtils/generateVerifyToken");
const { sendEmail } = require("../../utils/commonUtils/sendEmail");
const router = require("express").Router();


// 認証メール再送信API

router.put("/:_id",
    getParamsUser,
    generateVerifyToken,
    authResendMailHandler,
    (req, res, next) => {
        sendEmail(req, res, next, req.paramsUser.authToken.unverifiedEmail, "LMAPからの認証メール", `認証トークン：${req.token}`)
    },
    (req, res) => {
        return res.status(200).json("変更用メールの送信が完了しました");
    }
)


module.exports = router;