const {
  getBodyUser,
} = require("../../controllers/userControllers/getBodyUser");
const {
  getProductAll,
} = require("../../controllers/productControllers/getProductAll");
const router = require("express").Router();

// ユーザーが出品した商品の一覧を取得するAPI

router.get("/:userId", async (req, res) => {
  try {
    getBodyUser, getProductAll;
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
