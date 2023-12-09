const router = require("express").Router();
const productExhibitApi = require("../api/productApi/productExhibitApi");
const productGetApi = require("../api/productApi/productGetApi");
const productUpdateApi = require("../api/productApi/productUpdateApi");
const productImageUploadApi = require("../api/productApi/productImageUploadApi");
const productImageExchangeApi = require("../api/productApi/productImageExchangeApi");
const productLikeApi = require("../api/productApi/productLikeApi");
const productGetOrderByUserApi = require("../api/productApi/productGetOrderByUser");
const productGetNewestApi = require("../api/productApi/productGetNewestApi");


// APIルーティング

router.use("/exhibit", productExhibitApi);
router.use("/get", productGetApi);
router.use("/update", productUpdateApi);
router.use("/imageUpload", productImageUploadApi);
router.use("/imageExchange", productImageExchangeApi);
router.use("/like", productLikeApi);
router.use("/getOrderUser", productGetOrderByUserApi);
router.use("/getNewest", productGetNewestApi);


module.exports = router;