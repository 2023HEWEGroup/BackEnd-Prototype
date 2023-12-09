const { getNewestProduct } = require("../../controllers/productControllers/getNewestProduct");
const router = require("express").Router();


// ホームページ用、最新の商品をスクロールの度に取得するAPI

router.get("/",
    getNewestProduct,
    (req, res) => {
        return res.status(200).json(req.products);
    }
)


module.exports = router;