const { groupBroadcasts } = require("../data/socketData");


// 配信者のsocketIdを更新する関数 (別windowはsocketIdも変わるため)

const updateLiverSocketId = (io) => (socket) => (roomId) => {
    for (const groupId in groupBroadcasts) {
        if (groupBroadcasts.hasOwnProperty(groupId)) {
            const roomToUpdate = groupBroadcasts[groupId].find(room => room.roomId === roomId);
            if (roomToUpdate) {
                roomToUpdate.liverSocketId = socket.id;
                roomToUpdate.userSocketIds.push(socket.id);
                // console.log(`Updated liverSocketId for room ${roomId} in group ${groupId}: ${socket.id}`);

                // 新しいウィンドウの配信者のsocketIdをルームに追加
                socket.join(`broadcast_${roomId}`);

                // // 新しいウィンドウの配信者のsocketIdを表示
                // console.log("配信ウィンドウの配信者socketid", socket.id);

                // // 配信ルーム内のすべてのsocketId
                // const room = io.sockets.adapter.rooms.get(`broadcast_${roomId}`);
                // if (room) {
                //     const socketsInRoom = Array.from(room);
                //     console.log("配信ルーム内のsocketId一覧", socketsInRoom);
                // }
                
                console.log("配信者SocketID:", socket.id);

                return; // 部屋が見つかったら更新して終了
            }
        }
    }
    console.error(`Room ${roomId} not found in any group.`);
};


module.exports = { updateLiverSocketId };