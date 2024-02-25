const { groupBroadcasts } = require("./data/socketData");
const { createRoom } = require("./requests/createRoom");
const { enterRoom } = require("./requests/enterRoom");
const { offerToNewAudience } = require("./requests/offerToNewAudience");
const { roomChat } = require("./requests/roomChat");
const { showGroupBroadcasts } = require("./requests/showGroupBroadcasts");
const { updateAudienceSocketId } = require("./requests/updateAuudienceSocketId");
const { updateLiverSocketId } = require("./requests/updateLiverSocketId");
const { disconnectSocketBroadcast2 } = require("./utils/disconnectSocketBroadcast2");
const { disconnectSocketBroadcast } = require("./utils/disconnectSosketBroadcast");
const { searchSocketIDFromUserId } = require("./utils/searchSocketIDFromUserId");
const { groupChatAdd } = require("./requests/groupChatAdd");


const socketConnection = (io) => (socket) => {

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
    socket.on('enterRoom', (roomId, userId, groupId) => {
        enterRoom(io)(socket)(roomId)(userId)(groupId);
    });

    // 参加者socketId更新 (Audienceのwindowに)
    socket.on('updateAudienceSocketId', (roomId, userId, groupId) => {
        updateAudienceSocketId(io)(socket)(roomId)(userId)(groupId);
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

    // 配信を退出 (broadcastsのボタンから退出)
    socket.on('leaveRoom', (userId) => {
        const socketId = searchSocketIDFromUserId(userId);
        disconnectSocketBroadcast2(io)(socket)(socketId); // socketIdを渡して退出処理
    })

    // 配信者がマイクの設定を変更したことを通知する(これは参加者側のレイアウト調節のため)
    socket.on('isMute', (roomId, isMic) => {
        io.to(`broadcast_${roomId}`).emit("isMute", isMic);
    })

    // 配信者が動画の共有設定を変更したことを通知する(これは参加者側のレイアウト調節のため)
    socket.on('isShare', (roomId, isVideo) => {
        io.to(`broadcast_${roomId}`).emit("isShare", isVideo);
    })

    // 配信ルーム内でチャットが送信された場合の処理
    socket.on('broadcastChat', (chat, groupId, roomId, userInfo) => {
        roomChat(io)(socket)(chat)(groupId)(roomId)(userInfo);
    })

    // グループルーム追加処理
    socket.on('enterGroup', (groupId) => {
        // グループのルームに追加
        socket.join(`group_${groupId}`);
    })

    // グループチャット追加処理
    socket.on('groupChat', (chat, groupId, currentUser) => {
        groupChatAdd(io)(socket)(chat, groupId, currentUser);
    })

    socket.on('disconnect', () => {
        disconnectSocketBroadcast(io)(socket); // socketからidを取得して退出処理
    });
};


module.exports = { socketConnection };