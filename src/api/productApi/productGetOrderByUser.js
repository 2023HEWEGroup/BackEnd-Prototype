const { getOrderProductByUser } = require("../../controllers/productControllers/getOrderProductByUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();


// 対象ユーザーの商品を決まった数ずつ最新のモノから取得するAPI

router.get("/:_id",
    getParamsUser,
    getOrderProductByUser,
    (req, res) => {
        return res.status(200).json(req.userProducts);
    }
)


module.exports = router;