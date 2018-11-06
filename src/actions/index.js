import types from './types'
import { auth, db } from '../firebase';
import { getErrorMessage } from '../helpers';

export const signOut = () => () => {
    auth.signOut();
}

export const getRoomInfo = roomId => async dispatch => {
    const roomRef = db.collection('chat-rooms').doc(roomId);

    roomRef.onSnapshot( room => {
        console.log('Room Info:', room.data());
    })
}

export const getRoomList = () => async dispatch => {
    try {
        const roomsRef = db.collection('chat-rooms');
        const rooms = [];

        roomsRef.orderBy('created', 'desc').onSnapshot(docs => {
            docs.forEach(doc => {
                rooms.push({...doc.data(), id: doc.id});
            });

            dispatch({
                type: types.GET_CHAT_ROOMS,
                rooms
            });
        });


    } catch(err) {
        console.log('Get Room List Error:', err);
    }
}

export const createAccount = ({email, password, username}) => async dispatch => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);

        const user = auth.currentUser;

        await user.updateProfile({
            displayName: username
        });

        dispatch({
            type: types.SIGN_IN,
            uid: user.uid,
            username
        });
    } catch(err) {
        
        dispatch({
            type: types.AUTH_ERROR,
            error: getErrorMessage(err)
        });
    }
}

export const signIn = ({email, password}) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch(err) {
        
        dispatch({
            type: types.AUTH_ERROR,
            error: getErrorMessage(err)
        });
    }
}

export const authChange = dispatch => {
    auth.onAuthStateChanged( user => {
        if(user){
            const { uid, displayName: username } = user;
            
            localStorage.setItem('chat-uid', uid);

            dispatch({
                type: types.SIGN_IN,
                uid,
                username
            });
        } else {
            localStorage.removeItem('chat-uid');

            dispatch({
                type: types.SIGN_OUT
            });
        }
    });
}

export const clearAuthError = () => ({type: types.CLEAR_AUTH_ERROR});
