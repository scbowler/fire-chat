import { chatTypes as types } from './types'
import { auth, db } from '../firebase';

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

export const getRoomInfo = roomId => dispatch => {
    const roomRef = db.collection('chat-rooms').doc(roomId);

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
        const rooms = [];

        return roomsRef.orderBy('created', 'desc').onSnapshot(docs => {
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
