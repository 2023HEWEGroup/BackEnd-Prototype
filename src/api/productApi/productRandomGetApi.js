const { getRandomProduct } = require("../../controllers/productControllers/getRandomProduct");
const router = require("express").Router();


// 指定個数の商品を重複無しのランダムで取得するAPI

router.get("/",
    getRandomProduct,
    (req, res) => {
        return res.status(200).json(req.products);
    }
)


module.exports = router;