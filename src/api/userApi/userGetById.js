const router = require("express").Router();
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");


// オブジェクトIDによってユーザーを取得するAPI

router.get("/:_id",
    getParamsUser,
    (req, res) => {
        return res.status(200).json(req.paramsUser);
    }
)


module.exports = router;