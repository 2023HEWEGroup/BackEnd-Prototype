const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { settingChargeHandler } = require("../../handlers/settingHandlers/settingChargeHandler");
const router = require("express").Router();


// ポイントチャージAPI

router.put("/:_id",
    getParamsUser,
    settingChargeHandler,
    (req, res) => {
        return res.status(200).json("ポイントをチャージしました");
    }
)


module.exports = router;