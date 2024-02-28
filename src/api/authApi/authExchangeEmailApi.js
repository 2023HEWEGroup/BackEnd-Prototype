const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { authExchangeEmailHandler } = require("../../handlers/authHandlers/authExchangeEmailHandler");
const { generateVerifyToken } = require("../../utils/commonUtils/generateVerifyToken");
const { sendEmail } = require("../../utils/commonUtils/sendEmail");
const { authExchangeEmailValidation } = require("../../validations/authValidations/authExchangeEmailValidation");
const { isError } = require("../../validations/isError");
const router = require("express").Router();


// メールアドレス変更API

router.post("/:_id",
    getParamsUser,
    authExchangeEmailValidation,
    isError,
    generateVerifyToken,
    authExchangeEmailHandler,
    (req, res, next) => {
        sendEmail(req, res, next, req.body.unverifiedEmail, "UNGRAからの認証メール", `認証トークン：${req.token}`)
    },
    (req, res) => {
        return res.status(200).json("変更用メールの送信が完了しました");
    }
)


module.exports = router;