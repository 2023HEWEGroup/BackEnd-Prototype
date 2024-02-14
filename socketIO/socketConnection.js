const { createRoom } = require("./requests/createRoom");
const { enterRoom } = require("./requests/enterRoom");
const { offerToNewAudience } = require("./requests/offerToNewAudience");
const { showGroupBroadcasts } = require("./requests/showGroupBroadcasts");
const { updateAudienceSocketId } = require("./requests/updateAuudienceSocketId");
const { updateLiverSocketId } = require("./requests/updateLiverSocketId");


const socketConnection = (io) => (socket) => {

    console.log('A user connected');

    // グループ毎の配信一覧を見る共通ルームへ参加(groupのbroadcasts.jsx)
    socket.on('groupBroadcasts', (groupId) => {
        showGroupBroadcasts(io)(socket)(groupId);
    });

    // チャットルーム作成要求
    socket.on('createRoom', (groupId, roomName, liverId, liverName) => {
        createRoom(io)(socket)(groupId)(roomName)(liverId)(liverName);
    });

    // 配信者socketId更新 (Liverのwindowに)
    socket.on('updateLiverSocketId', (roomId) => {
        updateLiverSocketId(io)(socket)(roomId)
    })

    // チャットルーム入室要求
    socket.on('enterRoom', (roomId, userId, groupId, index) => {
        enterRoom(io)(socket)(roomId)(userId)(groupId)(index);
    });

    // 参加者socketId更新 (Audienceのwindowに)
    socket.on('updateAudienceSocketId', (roomId) => {
        updateAudienceSocketId(io)(socket)(roomId);
    })

    // 配信者から参加者にofferを送信
    socket.on('offerToNewAudience', (audienceSocketId, localDescription) => {
        offerToNewAudience(io)(socket)(audienceSocketId)(localDescription);
    })

    // 参加者から配信者にanswerを送信
    socket.on('answerForLiver', (answerForLiver, liverSocketId) => {
        io.to(liverSocketId).emit("answer", answerForLiver, socket.id);
    })

    // 配信者から参加者にICEを送信
    socket.on('iceFromPeer', (ICE, audienceSocketId) => {
        io.to(audienceSocketId).emit("iceFromLiver", ICE, socket.id);
    })

    // 参加者から配信者にICEを送信
    socket.on('iceFromAudience', (ICE, liverSocketId) => {
        io.to(liverSocketId).emit("iceFromAudience", ICE, socket.id);
    })

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
};


module.exports = { socketConnection };