const { getParamsProduct } = require("../../controllers/productControllers/getParamsProduct");
const { productImageExchangeHandler } = require("../../handlers/productHandlers/productImageExchangeHandler");
const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { isProductTrading } = require("../../utils/productUtils/isProductTrading");
const router = require("express").Router();


// 商品画像交換API

router.put("/:productId",
    getParamsProduct,
    isProductTrading,
    imageUpload(process.env.PRODUCT_IMAGE_UPLOAD_PATH).array("productImage", 4),
    productImageExchangeHandler,
    (req, res) => {
        return res.status(200).json("商品画像の交換が完了しました");
    }
)


module.exports = router;