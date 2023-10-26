const { getParamsProduct } = require("../../controllers/productControllers/getParamsProduct");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { productLikeHandler } = require("../../handlers/productHandlers/productLikeHandler");
const router = require("express").Router();


// 商品いいねAPI

router.put("/:productId",
    getBodyUser,
    getParamsProduct,
    productLikeHandler,
)


module.exports = router;