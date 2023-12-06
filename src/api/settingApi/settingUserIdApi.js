const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userUpdateHandler } = require("../../handlers/userHandlers/userUpdateHandler");
const { isError } = require("../../validations/isError");
const { settingUserIdValidations } = require("../../validations/settingValidations/settingUserIdValidation");
const router = require("express").Router();


// ユーザーID更新API

router.put("/:_id",
    settingUserIdValidations,
    isError,
    getParamsUser,
    userUpdateHandler,
    (req, res) => {
        return res.status(200).json("ユーザーIDを更新しました");
    }
)


module.exports = router;