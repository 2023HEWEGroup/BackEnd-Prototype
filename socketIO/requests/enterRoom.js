const { groupBroadcasts } = require('../data/socketData');
const { isLiving } = require('../utils/isLiving');

const enterRoom = (io) => (socket) => (roomId) => (userId) => (groupId) => {

    const isLive = isLiving(userId); // ユーザーがすでに何らかの配信に参加中ならreturn;
    if (isLive) return true;

    // ブロードキャストルームのクライアントにイベントを送信する
    io.to(`broadcasts_${groupId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);


    // 配信ルームの人数
    // const numClientsInRoom = io.sockets.adapter.rooms.get(`broadcast_${roomId}`)?.size || 0;
    // console.log(`Room broadcast_${roomId} has ${numClientsInRoom} clients.`);
};


module.exports = { enterRoom };