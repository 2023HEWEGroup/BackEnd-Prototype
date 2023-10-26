const router = require("express").Router();
const { authRegisterHandler } = require("../../handlers/authHandlers/authRegisterHandler");
const { generateVerifyToken } = require("../../utils/commonUtils/generateVerifyToken");
const { sendEmail } = require("../../utils/commonUtils/sendEmail");
const { authRegisterValidation } = require("../../validations/authValidations/authRegisterValidation");
const { isError } = require("../../validations/isError");


// 新規登録API

router.post("/", 
    authRegisterValidation,
    isError,
    generateVerifyToken,
    authRegisterHandler,
    (req, res, next) => {
        sendEmail(req, res, next, req.body.unverifiedEmail, "LMAPからの認証メール", `認証トークン：${req.token}`);
    },
    (req, res) => {
        return res.status(200).json(req.user);
    }
);


module.exports = router;