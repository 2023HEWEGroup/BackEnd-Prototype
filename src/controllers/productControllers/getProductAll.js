exports.getProductAll = async (req, res) => {
  try {
    const user = req.bodyUser;
    const products = await Product.find({
      _id: { $in: user.products },
    });
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};
