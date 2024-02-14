const { groupBroadcasts } = require('../data/socketData');
const { isLiving } = require('../utils/isLiving');

const enterRoom = (io) => (socket) => (roomId) => (userId) => (groupId) => (index)=> {

    const isLive = isLiving(userId); // ユーザーがすでに何らかの配信に参加中ならreturn;
    if (isLive) return true;

    // 参加者のオブジェクトIDを配列に追加
    const room = groupBroadcasts[groupId][index];
    if (room) {
        room.users.push(userId);
    } else {
        console.error('部屋が見つかりませんでした。');
        return; // エラー処理：部屋が見つからない場合は処理を中断する
    }
    // ブロードキャストルームのクライアントにイベントを送信する
    io.to(`broadcasts_${groupId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);


    // 配信ルームの人数
    // const numClientsInRoom = io.sockets.adapter.rooms.get(`broadcast_${roomId}`)?.size || 0;
    // console.log(`Room broadcast_${roomId} has ${numClientsInRoom} clients.`);
};


module.exports = { enterRoom };