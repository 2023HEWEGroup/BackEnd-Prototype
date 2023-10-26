// 商品が取引中だった場合リターンさせる関数

exports.isProductTrading = (req, res, next) => {
    const product = req.paramsProduct;
    if (product.purchasingId) {
        return res.status(403).json("商品が取引中です");
    }
    next();
}