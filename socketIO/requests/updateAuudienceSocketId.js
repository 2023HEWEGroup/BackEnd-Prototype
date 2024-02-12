const { groupBroadcasts } = require("../data/socketData");


// 参加者のsocketIdを更新する関数 (別windowはsocketIdも変わるため)

const updateAudienceSocketId = (io) => (socket) => (roomId) => {
    for (const groupId in groupBroadcasts) {
        if (groupBroadcasts.hasOwnProperty(groupId)) {
            const roomToUpdate = groupBroadcasts[groupId].find(room => room.roomId === roomId);
            if (roomToUpdate) {
                roomToUpdate.audienceSocketIds.push(socket.id); // 実際参加者がwindow開いたらそのwindow(クライアント)からのsocketIdを格納してる
                console.log(`Updated liverSocketId for room ${roomId} in group ${groupId}: ${socket.id}`);
                // 配信者に参加者が増えたことを通知する(offerを催促するためのcallとでも) 参加クライアント(移転先window)のsocketIDを付加
                io.to(roomToUpdate.liverSocketId).emit('newAudience', socket.id);
                return; // 部屋が見つかったら更新して終了
            }
        }
    }
    console.error(`Room ${roomId} not found in any group.`);
};


module.exports = { updateAudienceSocketId };