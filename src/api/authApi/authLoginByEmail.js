const router = require("express").Router();
const { isError } = require("../../validations/isError");
const { verifyPassword } = require("../../utils/commonUtils/verifyPassword");
const { authLoginByEmailValidation } = require("../../validations/authValidations/authLoginByEmailValidation");
const { getBodyEailUser } = require("../../controllers/userControllers/getBodyEmailUser");


// メールアドレスログインAPI

router.post("/",
    authLoginByEmailValidation,
    isError,
    getBodyEailUser,
    verifyPassword,
    (req, res) => {
        return res.status(201).json(req.emailUser);
    }
)


module.exports = router;