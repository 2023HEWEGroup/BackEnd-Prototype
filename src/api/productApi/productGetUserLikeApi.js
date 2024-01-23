const { getUserLikeProduct } = require("../../controllers/productControllers/getUserLikeProduct");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();


// 対象ユーザーのいいねしている商品を取得するAPI (ページネーション対応)

router.get("/:_id",
    getParamsUser,
    getUserLikeProduct,
    (req, res) => {
        return res.status(200).json(req.userProducts);
    }
)


module.exports = router;