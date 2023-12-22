const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { settingCreditCardDeleteHandler } = require("../../handlers/settingHandlers/settingCreditCardeleteHandler");
const router = require("express").Router();


// クレジットカード情報削除API

router.delete("/:_id",
    getParamsUser,
    settingCreditCardDeleteHandler,
    (req, res) => {
        return res.status(200).json("クレジットカード情報を削除しました");
    }
)


module.exports = router;