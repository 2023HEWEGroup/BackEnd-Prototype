const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userUpdateHandler } = require("../../handlers/userHandlers/userUpdateHandler");
const { isError } = require("../../validations/isError");
const { userUpdateValidation } = require("../../validations/userValidations/userUpdateValidation");
const router = require("express").Router();


// ユーザープロフィール更新API

router.put("/:_id",
    userUpdateValidation,
    isError,
    getParamsUser,
    userUpdateHandler,
    (req, res) => {
        return res.status(200).json("ユーザープロフィールを更新しました");
    }
)


module.exports = router;