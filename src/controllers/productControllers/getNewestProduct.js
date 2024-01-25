const Product = require("../../models/products");


// 最新の商品をスクロールの度に取得するミドルウェア

exports.getNewestProduct = async (req, res, next) => {
    try {
        const { page, pageSize, category } = req.query;
        const products = await Product.find(category === "すべての商品" ? null : {category: category})
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize))
        .populate('sellerId', ['userId']);
        req.products = products;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}