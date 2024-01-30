const { getAllSearchProduct } = require("../../controllers/productControllers/getAllSearchProduct");
const router = require("express").Router();

// 検索ワードに合致する商品をページネーション対応で取得するAPI (productName)

router.get("/",
    getAllSearchProduct,
    (req, res) => {
        return res.status(200).json({products: req.products, num: req.num});
    }
)


module.exports = router;