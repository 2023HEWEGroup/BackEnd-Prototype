const Product = require("../../models/products");


// リクエストパラメータから商品を取得する関数

exports.getParamsProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json("商品が見つかりません (params)")
        }
        req.paramsProduct = product;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}