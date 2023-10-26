const Product = require("../../models/products");


// 商品出品処理

exports.productExhibitHandler = async (req, res, next) => {
    try {
        const user = req.bodyUser;
        const newProduct = await new Product({
            productName: req.body.productName,
            productImg: req.body.productImg,
            sellerId: user._id.toString(),
            desc: req.body.desc,
            condition: req.body.condition,
            tags: req.body.tags,
            price: req.body.price,
        })
        const product = await newProduct.save();
        req.product = product;
        await user.updateOne({
            $push: {
                products: product._id.toString()
            }
        })
        user.save();
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}