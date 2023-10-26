const router = require("express").Router();
const { isError } = require("../../validations/isError");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { authLoginValidation } = require("../../validations/authValidations/authLoginValidation");
const { verifyPassword } = require("../../utils/commonUtils/verifyPassword");


// ログインAPI

router.post("/",
    authLoginValidation,
    isError,
    getBodyUser,
    verifyPassword,
    (req, res) => {
        return res.status(201).json(req.bodyUser);
    }
)


module.exports = router;