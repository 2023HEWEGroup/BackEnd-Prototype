const { groupBroadcasts } = require("../data/socketData");

// 切断されたSocketIDが何らかの配信に参加していた場合、必要な処理を行い切断されたことを配信ルームとグループ配信一覧ルームに通知するミドルウェア
// こちらはsocket.idではなくsocketIdを直接引数から渡す
exports.disconnectSocketBroadcast2 = (io) => (socket) => (socketId) => {
    for (const groupId in groupBroadcasts) {
        const groupRooms = groupBroadcasts[groupId];
        for (const room of groupRooms) {
            const index = room.users.findIndex(user => user.socketId === socketId);
            if (index !== -1) {

                // 削除するユーザーのフィールド
                const deleteUser = room.users[index];

                // 切断されたSocketIDがこのルームに存在する場合の処理
                room.users.splice(index, 1); // ユーザー情報を削除 (socketIDとオブジェクトIDの組をまとめて)

                // 配信者だった場合、ルームから全クライアントを削除ルームも削除
                if (room.liverId === deleteUser.userId) {
                    io.of('/').in(room).allSockets().then((sockets) => {
                        sockets.forEach(socketId => {
                            io.sockets.sockets.get(socketId).leave(room);
                    });
                    }).catch((error) => {
                        console.error('Error in fetching clients in room:', error);
                    });
                    // 配信していたルームを削除
                    if (groupBroadcasts.hasOwnProperty(groupId)) {
                        const array = groupBroadcasts[groupId];
                        for (let i = 0; i < array.length; i++) {
                            if (array[i].roomId === room.roomId) {
                                array.splice(i, 1); // 条件を満たす要素を削除
                                break; // 削除したらループを終了
                            }
                        }
                    }
                    // ルームの全クライアントの配信windowを閉じる要求
                    io.to(`broadcast_${room.roomId}`).emit('closeWindow');
                } else {
                    // 配信者でない場合はそのクライアントのみ削除
                    socket.leave(`broadcast_${room.roomId}`);
                    // 退出したクラウイアントの配信windowを閉じる要求
                    io.to(socketId).emit('closeWindow');
                }
                
                // ブロードキャストルームのクライアントにイベントを送信する
                io.to(`broadcasts_${groupId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);
                // 配信ルーム内にも通知
                io.to(`broadcast_${room.roomId}`).emit('groupBroadcasts', groupBroadcasts[groupId]);

                // console.log(`Socket ID ${socket.id} が配信から切断されました`);
                // console.log(groupBroadcasts)
                return;
            }
        }
    }
};