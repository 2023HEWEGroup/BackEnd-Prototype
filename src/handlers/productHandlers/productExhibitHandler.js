const Product = require("../../models/products");


// 商品出品処理

exports.productExhibitHandler = async (req, res, next) => {
    try {
        const user = req.bodyUser;
        const newProduct = await new Product({
            productName: req.body.productName,
            desc: req.body.desc,
            price: req.body.price,
            condition: req.body.condition,
            shippingArea: req.body.shippingArea,
            deliveryCost: req.body.deliveryCost,
            category: req.body.category,
            productImg: req.body.productImg,
            sellerId: user._id.toString(),
            tags: req.body.tags,
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