import { chatTypes as types } from './types'
import { auth, db } from '../firebase';

export const getChatLog = logId => async dispatch => {
    const logRef = db.collection(`logs/${logId}/messages`);

    logRef.orderBy('ts').limit(100).onSnapshot( docs => {
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

    roomRef.onSnapshot(room => {
        dispatch({
            type: types.GET_ROOM_INFO,
            currentRoom: room.data()
        });
    });
}

export const getRoomList = () => async dispatch => {
    try {
        const roomsRef = db.collection('chat-rooms');
        const rooms = [];

        roomsRef.orderBy('created', 'desc').onSnapshot(docs => {
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
