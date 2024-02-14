const { groupBroadcasts } = require("../data/socketData");


// 参加者のsocketIdを更新する関数 (別windowはsocketIdも変わるため)

const updateAudienceSocketId = (io) => (socket) => (roomId) => {
    for (const groupId in groupBroadcasts) {
        if (groupBroadcasts.hasOwnProperty(groupId)) {
            const roomToUpdate = groupBroadcasts[groupId].find(room => room.roomId === roomId);
            if (roomToUpdate) {

                // 新しいウィンドウの参加者のsocketIdをルームに追加
                socket.join(`broadcast_${roomId}`);

                // 参加者のSocketIdも配列に追加 (切断時にSocketIdからルームを特定)
                roomToUpdate.userSocketIds.push(socket.id);

                // // 新しいウィンドウの参加者のsocketIdを表示
                // console.log("配信ウィンドウの参加者socketid", socket.id);

                // // 配信ルーム内のすべてのsocketId
                // const room = io.sockets.adapter.rooms.get(`broadcast_${roomId}`);
                // if (room) {
                //     const socketsInRoom = Array.from(room);
                //     console.log("配信ルーム内のsocketId一覧", socketsInRoom);
                // }

                console.log("参加者SocketID:", socket.id);
                console.log(roomToUpdate)

                // 配信者に参加者が増えたことを通知する(offerを催促するためのcallとでも) 参加クライアント(移転先window)のsocketIDを付加
                io.to(roomToUpdate.liverSocketId).emit('newAudience', socket.id);
                return; // 部屋が見つかったら更新して終了
            }
        }
    }
    console.error(`Room ${roomId} not found in any group.`);
};


module.exports = { updateAudienceSocketId };