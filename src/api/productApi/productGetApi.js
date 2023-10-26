const { getParamsProduct } = require("../../controllers/productControllers/getParamsProduct");
const router = require("express").Router();


// 商品取得API

router.get("/:productId",
    getParamsProduct,
    (req, res) => {
        return res.status(200).json(req.paramsProduct);
    }
)


module.exports = router;