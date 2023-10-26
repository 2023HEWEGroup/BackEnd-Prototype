// 商品更新処理

exports.productUpdateHandler = async (req, res, next) => {
    try {
        const product = req.paramsProduct;
        await product.updateOne({
            productName: req.body.productName,
            desc: req.body.desc,
            condition: req.body.condition,
            tags: req.body.tags,
            price: req.body.price,
        })
        return res.status(200).json("商品情報の更新に成功しました");
    } catch (err) {
        return res.status(500).json(err);
    }
}