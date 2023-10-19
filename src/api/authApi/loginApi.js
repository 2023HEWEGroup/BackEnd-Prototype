const router = require("express").Router();
const { loginValidation } = require("../../validations/authValidations/loginValidation");
const { isError } = require("../../validations/isError");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { verifyPassword } = require("../../utils/authUtils/verifyPassword");


// ログインAPI

router.post("/",
    loginValidation,
    isError,
    getBodyUser,
    verifyPassword,
    (req, res) => {
        return res.status(201).json(req.bodyUser);
    }
)


module.exports = router;