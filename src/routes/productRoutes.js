const router = require("express").Router();
const productExhibitApi = require("../api/productApi/productExhibitApi");
const productGetApi = require("../api/productApi/productGetApi");
const productUpdateApi = require("../api/productApi/productUpdateApi");
const productImageUploadApi = require("../api/productApi/productImageUploadApi");
const productImageExchangeApi = require("../api/productApi/productImageExchangeApi");
const productLikeApi = require("../api/productApi/productLikeApi");
const userGetProductAll = require("../api/productApi/userGetProducts");
// APIルーティング

router.use("/exhibit", productExhibitApi);
router.use("/get", productGetApi);
router.use("/getAllByUser", userGetProductAll);
router.use("/update", productUpdateApi);
router.use("/imageUpload", productImageUploadApi);
router.use("/imageExchange", productImageExchangeApi);
router.use("/like", productLikeApi);

module.exports = router;
