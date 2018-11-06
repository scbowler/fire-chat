import { chatTypes as types } from './types'
import { db } from '../firebase';

export const getRoomInfo = roomId => async dispatch => {
    const roomRef = db.collection('chat-rooms').doc(roomId);

    roomRef.onSnapshot(room => {
        console.log('Room Info:', room.data());
    })
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
