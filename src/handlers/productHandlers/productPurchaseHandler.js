// 商品購入処理

exports.productPurchaseHandler = async (req, res, next) => {
    try {
        const product = req.paramsProduct;
        const user = req.bodyUser;
        const { mode } = req.query;
        await product.updateOne({
            purchasingId: user._id
        });
        if (mode === "point") {
            await user.updateOne({
                points: user.points - product.price
            });
        }
        return res.status(200).json("商品の購入に成功しました");
    } catch (err) {
        return res.status(500).json(err);
    }
}