const router = require("express").Router();
const productExhibitApi = require("../api/productApi/productExhibitApi");
const productGetApi = require("../api/productApi/productGetApi");
const productUpdateApi = require("../api/productApi/productUpdateApi");
const productImageUploadApi = require("../api/productApi/productImageUploadApi");
const productImageExchangeApi = require("../api/productApi/productImageExchangeApi");
const productLikeApi = require("../api/productApi/productLikeApi");
const productGetOrderByUserApi = require("../api/productApi/productGetOrderByUser");
const productGetNewestApi = require("../api/productApi/productGetNewestApi");
const producRandomGetApi = require("../api/productApi/productRandomGetApi");
const productPurchaseApi = require("../api/productApi/productPurchaseApi");
const productGetUserLikeApi = require("../api/productApi/productGetUserLikeApi");
const productSerachAllApi = require("../api/productApi/productSearchAll");


// APIルーティング

router.use("/exhibit", productExhibitApi);
router.use("/get", productGetApi);
router.use("/update", productUpdateApi);
router.use("/imageUpload", productImageUploadApi);
router.use("/imageExchange", productImageExchangeApi);
router.use("/like", productLikeApi);
router.use("/getOrderUser", productGetOrderByUserApi);
router.use("/getNewest", productGetNewestApi);
router.use("/getRandom", producRandomGetApi);
router.use("/purchase", productPurchaseApi);
router.use("/userLike", productGetUserLikeApi);
router.use("/searchAll", productSerachAllApi);


module.exports = router;