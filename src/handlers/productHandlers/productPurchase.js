// 商品注文処理

exports.productPurchaseHandler = async (req, res, next) => {
    try {
        const user = req.bodyUser;
        const product = req.paramsProduct;
        await user.updateOne({
            $push: {
                purchasings: product._id.toString()
            }
        })
        await product.updateOne({
            $push: {
                purchasings: user._id.toString()
            }
        })
        next();

    } catch (err) {
        return res.status(500).json(err);
    }
}