const { getFollowingProduct } = require("../../controllers/productControllers/getFollowingProduct");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();

// フォロー中の商品をページネーション対応で取得するAPI

router.get("/:_id",
    getParamsUser,
    getFollowingProduct,
    (req, res) => {
        return res.status(200).json(req.products);
    }
)


module.exports = router;