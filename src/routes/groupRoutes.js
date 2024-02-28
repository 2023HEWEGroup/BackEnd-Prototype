const router = require("express").Router();
const groupheaderUploadApi = require("../api/groupApi/groupUploadHeader");
const groupIconUploadApi = require("../api/groupApi/groupIconUploadApi");
const groupEstablishApi = require("../api/groupApi/groupEstablishApi");
const groupGetApi = require("../api/groupApi/groupGetApi");
const groupGetFavoriteApi = require("../api/groupApi/groupGetFavoriteApi");
const getUserGroupApi = require("../api/groupApi/getUserGroupApi");
const getRandomGroupApi = require("../api/groupApi/getRandomGroupApi");
const groupUpdateApi = require("../api/groupApi/groupUpdateApi");
const groupUpdateIconApi = require("../api/groupApi/groupUpdateIconApi");
const groupDeleteIconApi = require("../api/groupApi/groupDeleteIconApi");
const groupUpdateHeaderApi = require("../api/groupApi/groupUpdateHeaderApi");
const groupDeleteHeaderApi = require("../api/groupApi/groupDeleteHeaderApi");
const groupJoinApi = require("../api/groupApi/groupJoinApi");
const groupGetMemberApi = require("../api/groupApi/groupGetMemberApi");
const groupStarApi = require("../api/groupApi/groupStarApi");


// APIルーティング

router.use("/headerUpload", groupheaderUploadApi);
router.use("/iconUpload", groupIconUploadApi);
router.use("/establish", groupEstablishApi);
router.use("/getGroup", groupGetApi);
router.use("/favorite", groupGetFavoriteApi);
router.use("/userGroup", getUserGroupApi);
router.use("/randomGroup", getRandomGroupApi);
router.use("/update", groupUpdateApi);
router.use("/updateIcon", groupUpdateIconApi);
router.use("/deleteIcon", groupDeleteIconApi);
router.use("/updateHeader", groupUpdateHeaderApi);
router.use("/deleteHeader", groupDeleteHeaderApi);
router.use("/join", groupJoinApi);
router.use("/getMember", groupGetMemberApi);
router.use("/star", groupStarApi);


module.exports = router;