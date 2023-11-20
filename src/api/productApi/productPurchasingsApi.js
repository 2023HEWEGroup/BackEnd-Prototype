const router = require("express").Router();
const { getParamsProduct } = require("../../controllers/productControllers/getParamsProduct");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { productPurchas } = require("../../handlers/productHandlers/productPurchase")

//商品注文API

router.put("/productpurchasings/:productId",
    getParamsProduct, // パラメータから商品(req.paramsProduct)を取得
    getBodyUser, // ボディからユーザー(req.bodyUser)を取得
    productPurchas,
    (req, res) => {
        return res.status(200).json("商品を注文しました");
    }
);


module.exports = router;