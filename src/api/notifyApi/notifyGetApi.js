const { getScrollNotify } = require("../../controllers/notifyControllers/getScrollNotify");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();


// 通知取得API

router.get("/:_id",
    getParamsUser,
    getScrollNotify,
    (req, res) => {
        return res.status(200).json(req.userNotifies);
    }
)


module.exports = router;