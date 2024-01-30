const Product = require("../../models/products");


// 最新の商品をスクロールの度に取得するミドルウェア

exports.getNewestProduct = async (req, res, next) => {
    try {
        const { page, pageSize, category, status } = req.query;

        let query = category === "すべての商品" ? {} : { category: category };
        // statusが"onSale"の場合、追加の条件を付け加える
        if (status === "onSale") {
            query = {
                ...query,
                $and: [
                    { purchasingId: null },
                    { isSold: false }
                ]
            };
            // statusが"soldOut"の場合、追加の条件を付け加える
        } else if (status === "soldOut") {
            query = {
                ...query,
                $or: [
                    { purchasingId: { $ne: null } },
                    { isSold: true }
                ]
            };
        }

        const products = await Product.find(
            query
        )
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