const { v4: uuidv4 } = require('uuid');
const { groupBroadcasts } = require('../data/socketData');
const { isLiving } = require('../utils/isLiving');

const createRoom = (io) => (socket) => (groupId) => (roomName) => (liverId) => (liverName) => {

    const isLive = isLiving(liverId); // ユーザーがすでに何らかの配信に参加中ならreturn;
    if (isLive) return true;

    const roomId = uuidv4(); // UUIDを生成
    const newRoom = {
        roomId: roomId,
        name: roomName,
        liverId: liverId,
        liverName: liverName,
        liverSocketId: socket.id, // 配信者のsocketIDを格納 (ここ宛てにcallしたり)
        users: [{socketId: "", userId: liverId}], // 参加者全員のsocketIDとオブジェクトIDのセット配列 (disconnect時に対応するsocketIdのフィールドを一緒に削除するため)
    };
    // グループの配信一覧に新しい配信を追加する
    if (!groupBroadcasts[groupId]) {
        groupBroadcasts[groupId] = [];
    }
    groupBroadcasts[groupId].push(newRoom);
    // ブロードキャストルームのクライアントにイベントを送信する
    io.to(`broadcasts_${groupId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);
    // 配信者にルームIDを渡す。配信ルーム(/broadcast/:roomId)
    io.to(socket.id).emit('roomId', roomId);
};


module.exports = { createRoom };