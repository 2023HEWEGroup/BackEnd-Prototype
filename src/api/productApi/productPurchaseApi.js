const { getParamsProduct } = require("../../controllers/productControllers/getParamsProduct");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { productPurchaseHandler } = require("../../handlers/productHandlers/productPurchaseHandler");
const router = require("express").Router();


// 商品購入API

router.put("/:productId",
    getBodyUser,
    getParamsProduct,
    productPurchaseHandler,
)


module.exports = router;