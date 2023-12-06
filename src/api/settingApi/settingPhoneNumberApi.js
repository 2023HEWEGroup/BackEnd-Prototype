const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userUpdateHandler } = require("../../handlers/userHandlers/userUpdateHandler");
const { isError } = require("../../validations/isError");
const { settingPhoneNumberValidations } = require("../../validations/settingValidations/settingPhoneNumberValidations");
const router = require("express").Router();


// 携帯電話番号更新API

router.put("/:_id",
    settingPhoneNumberValidations,
    isError,
    getParamsUser,
    userUpdateHandler,
    (req, res) => {
        return res.status(200).json("携帯電話番号を更新しました");
    }
)


module.exports = router;