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
        sendEmail(req, res, next, req.body.unverifiedEmail, "LMAPからの二段階認証用メール", `${req.body.upperName} ${req.body.lowerName} 様、この度はLMAPにご登録頂き、誠にありがとうございます。\n以下の認証コードを設定ページよりご入力頂くことで、アカウントの二段階認証が完了いたします。\n\n========================\n認証コード：${req.token}\n========================`);
    },
    (req, res) => {
        return res.status(200).json(req.user);
    }
);


module.exports = router;