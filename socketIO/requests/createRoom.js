const { v4: uuidv4 } = require('uuid');
const { groupBroadcasts } = require('../data/socketData');

const createRoom = (io) => (socket) => (groupId) => (roomName) => (liverId) => {
    const roomId = uuidv4(); // UUIDを生成
    const newRoom = {
        roomId: roomId,
        name: roomName,
        liverId: liverId,
        liverSocketId: socket.id, // 配信者のsocketIDを格納 (ここ宛てにcallしたり)
        users: [liverId], // 配信者のオブジェクトIDを追加
        audienceSocketIds: [],
    };
    // グループの配信一覧に新しい配信を追加する
    if (!groupBroadcasts[groupId]) {
        groupBroadcasts[groupId] = [];
    }
    console.log(groupBroadcasts)
    groupBroadcasts[groupId].push(newRoom);
    // 配信者をルームに追加
    socket.join(`broadcast_${roomId}`);
    // ブロードキャストルームのクライアントにイベントを送信する
    io.to(`broadcasts_${groupId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);
    console.log(groupBroadcasts)
    // 配信者にルームIDを渡す。配信ルーム(/broadcast/:roomId)
    socket.emit('roomId', roomId);
};


module.exports = { createRoom };