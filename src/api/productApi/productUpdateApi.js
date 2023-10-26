const { getParamsProduct } = require("../../controllers/productControllers/getParamsProduct");
const { productUpdateHandler } = require("../../handlers/productHandlers/productUpdateHandler");
const { isProductTrading } = require("../../utils/productUtils/isProductTrading");
const { isError } = require("../../validations/isError");
const { productUpdateValidation } = require("../../validations/productValidations/productUpdateValidation");
const router = require("express").Router();


// 商品更新API

router.put("/:productId",
    productUpdateValidation,
    isError,
    getParamsProduct,
    isProductTrading,
    productUpdateHandler,
    (req, res) => {
        return res.status(200).json("商品の更新が完了しました");
    }
)


module.exports = router;