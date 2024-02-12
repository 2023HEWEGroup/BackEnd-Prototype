const { groupBroadcasts } = require("../data/socketData");


// 配信者が参加者にofferを送信する関数

const offerToNewAudience = (io) => (socket) => (audienceSocketId) => (localDescription) => {
    io.to(audienceSocketId).emit("offer", localDescription, socket.id);
};


module.exports = { offerToNewAudience };