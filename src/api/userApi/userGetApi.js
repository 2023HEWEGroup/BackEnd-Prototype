const router = require("express").Router();
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { isUserBlocked } = require("../../utils/userUtils/isUserBlocked");


// ユーザー取得API

router.get("/:userId",
    getBodyUser,
    getParamsUser,
    isUserBlocked,
    (req, res) => {
        return res.status(200).json(req.bodyUser);
    }
)


module.exports = router;