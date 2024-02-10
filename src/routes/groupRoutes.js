const router = require("express").Router();
const groupheaderUploadApi = require("../api/groupApi/groupUploadHeader");
const groupIconUploadApi = require("../api/groupApi/groupIconUploadApi");
const groupEstablishApi = require("../api/groupApi/groupEstablishApi");
const groupGetApi = require("../api/groupApi/groupGetApi");


// APIルーティング

router.use("/headerUpload", groupheaderUploadApi);
router.use("/iconUpload", groupIconUploadApi);
router.use("/establish", groupEstablishApi);
router.use("/getGroup", groupGetApi);


module.exports = router;