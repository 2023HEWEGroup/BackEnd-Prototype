const { getUnreadCountNotify } = require("../../controllers/notifyControllers/getUnreadCountNotify");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();


// 未読通知数取得API

router.get("/:_id",
    getParamsUser,
    getUnreadCountNotify,
    (req, res) => {
        return res.status(200).json(req.unreadNum);
    }
)


module.exports = router;