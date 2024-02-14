const { groupBroadcasts } = require("../data/socketData");


// 配信者のsocketIdを更新する関数 (別windowはsocketIdも変わるため)

const updateLiverSocketId = (io) => (socket) => (roomId) => {
    for (const groupId in groupBroadcasts) {
        if (groupBroadcasts.hasOwnProperty(groupId)) {
            const roomToUpdate = groupBroadcasts[groupId].find(room => room.roomId === roomId);
            if (roomToUpdate) {
                roomToUpdate.liverSocketId = socket.id;
                roomToUpdate.users[0].socketId = socket.id; // users配列の0番目(配信者)のsocketIdも更新
                console.log(`Updated liverSocketId for room ${roomId} in group ${groupId}: ${socket.id}`);
                return; // 部屋が見つかったら更新して終了
            }
        }
    }
    console.error(`Room ${roomId} not found in any group.`);
};


module.exports = { updateLiverSocketId };