const router = require("express").Router();
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");


// ユーザーIDによってユーザーを取得するAPI

router.get("/:userId",
    getParamsUser,
    (req, res) => {
        return res.status(200).json(req.paramsUser);
    }
)


module.exports = router;