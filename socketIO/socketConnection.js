const { createRoom } = require("./requests/createRoom");
const { enterRoom } = require("./requests/enterRoom");
const { showGroupBroadcasts } = require("./requests/showGroupBroadcasts");


const socketConnection = (io) => (socket) => {

    console.log('A user connected');

    // グループ毎の配信一覧を見る共通ルームへ参加(groupのbroadcasts.jsx)
    socket.on('groupBroadcasts', (groupId) => {
        showGroupBroadcasts(io)(socket)(groupId);
    });

    // チャットルーム作成要求
    socket.on('createRoom', (groupId, roomName, liverId) => {
        createRoom(io)(socket)(groupId)(roomName)(liverId);
    });

    // チャットルーム入室要求
    socket.on('enterRoom', (roomId, userId, groupId, index) => {
        enterRoom(io)(socket)(roomId)(userId)(groupId)(index);
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
};


module.exports = { socketConnection };