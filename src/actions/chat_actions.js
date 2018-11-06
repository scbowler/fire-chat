import { chatTypes as types } from './types'
import { auth, db } from '../firebase';

export const clearRoomData = () => ({type: types.CLEAR_ROOM_DATA});

export const createRoom = roomInfo => async dispatch => {
    const now = new Date();

    const firstMessage = {
        message: `Welcome to room: "${roomInfo.name}"`,
        name: 'Admin Bot',
        ts: now,
        uid: 'bot'
    }

    const newRef = db.collection('logs').doc();

    await db.collection(`logs/${newRef.id}/messages`).add(firstMessage);

    const newRoom = {
        ...roomInfo,
        created: now,
        createdBy: auth.currentUser.uid,
        logId: newRef.id,
        users: []
    }

    const roomRef = db.collection('chat-rooms').doc();

    await roomRef.set(newRoom);

    return roomRef.id;
}

export const getChatLog = logId => dispatch => {
    const logRef = db.collection(`logs/${logId}/messages`);

    return logRef.orderBy('ts').limit(100).onSnapshot( docs => {
        const messages = [];

        docs.forEach(msg => {
            const message = msg.data();
            message.ts = message.ts.toDate();
            message.id = msg.id;

            messages.push(message);
        });

        dispatch({
            type: types.GET_CHAT_LOG,
            messages
        });
    });
}

export const getRoomInfo = roomId => async dispatch => {
    const roomRef = db.collection('chat-rooms').doc(roomId);

    const roomData = await roomRef.get();

    if (!roomData.exists) return false;

    const { users } = roomData.data();
    const username = auth.currentUser.displayName

    if(!users.includes(username)){
        users.push(username)
    }

    await roomRef.set({
        users
    }, { merge: true });

    return roomRef.onSnapshot(room => {
        dispatch({
            type: types.GET_ROOM_INFO,
            currentRoom: room.data()
        });
    });
}

export const getRoomList = () => dispatch => {
    try {
        const roomsRef = db.collection('chat-rooms');

        return roomsRef.orderBy('created', 'desc').onSnapshot(docs => {
            const rooms = [];

            docs.forEach(doc => {
                rooms.push({ ...doc.data(), id: doc.id });
            });

            dispatch({
                type: types.GET_CHAT_ROOMS,
                rooms
            });
        });


    } catch (err) {
        console.log('Get Room List Error:', err);
    }
}

export const leaveRoom = roomId => async dispatch => {
    const roomRef = db.collection('chat-rooms').doc(roomId);

    const roomData = await roomRef.get();

    if(!roomData.exists){
        return false;
    }

    const { users } = roomData.data();
    const username = auth.currentUser.displayName

    const nameIndex = users.indexOf(username);

    if (nameIndex >= 0) {
        users.splice(nameIndex, 1);
    }

    await roomRef.set({
        users
    }, { merge: true });
}

export const sendMessage = (message, logId) => dispatch => {
    const logRef = db.collection(`logs/${logId}/messages`);

    const user = auth.currentUser;

    const newMessage = {
        message,
        name: user.displayName,
        ts: new Date(),
        uid: user.uid
    }

    return logRef.add(newMessage);
}
