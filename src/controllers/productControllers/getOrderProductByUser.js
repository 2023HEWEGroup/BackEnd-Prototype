const Product = require("../../models/products");


// 対象ユーザーの商品を最新の物から決まった数ずつ取得する

exports.getOrderProductByUser = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const { page, pageSize } = req.query;
        const userProducts = await Product.find({ sellerId: user._id })
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.userProducts = userProducts;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}