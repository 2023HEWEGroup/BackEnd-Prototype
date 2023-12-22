const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { settingCreditCardUpdateHandler } = require("../../handlers/settingHandlers/settingCreditCardUpdateHandler");
const router = require("express").Router();


// クレジットカード更新API

router.post("/:_id",
    getParamsUser,
    settingCreditCardUpdateHandler,
    (req, res) => {
        return res.status(200).json("クレジットカード情報を更新しました");
    }
)


module.exports = router;