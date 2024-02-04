// 商品いいね処理

exports.productLikeHandler = async (req, res) => {
    try {
        const product = req.paramsProduct;
        const currentUser = req.bodyUser;
        if (!product.likes.includes(currentUser._id)) {
            await product.updateOne({
                $push: {
                    likes: currentUser._id.toString()
                }
            })
            await currentUser.updateOne({
                $push: {
                    likes: product._id.toString()
                }
            })
            return res.status(200).json("商品のいいねが完了しました");
        } else {
            await product.updateOne({
                $pull: {
                    likes: currentUser._id.toString()
                }
            })
            await currentUser.updateOne({
                $pull: {
                    likes: product._id.toString()
                }
            })
            return res.status(200).json("商品のいいね解除が完了しました");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}