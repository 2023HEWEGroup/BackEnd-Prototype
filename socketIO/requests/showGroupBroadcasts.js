const { groupBroadcasts } = require("../data/socketData");


// あるグループの配信一覧を見るルームに参加する関数

const showGroupBroadcasts = (io) => (socket) => (groupId) => {
    // グループの配信一覧ルームへ参加
    socket.join(`broadcasts_${groupId}`);
     // グループの配信一覧が存在しない場合、空の配信一覧を設定する
    if (!groupBroadcasts[groupId]) {
        groupBroadcasts[groupId] = [];
    }
    // 参加したら同じルームのクライアントにイベントを送信する
    io.to(`broadcasts_${groupId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);


    // 配信一覧ルームの人数
    const numClientsInRoom = io.sockets.adapter.rooms.get(`broadcasts_${groupId}`)?.size || 0;
    console.log(`Room broadcasts_${groupId} has ${numClientsInRoom} clients.`);
};


module.exports = { showGroupBroadcasts };