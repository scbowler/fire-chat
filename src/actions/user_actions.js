import { userTypes as types } from './types'
import { auth } from '../firebase';
import { getErrorMessage } from '../helpers';

export const authChange = dispatch => {
    auth.onAuthStateChanged(user => {
        if (user) {
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

export const signIn = ({ email, password }) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {

        dispatch({
            type: types.AUTH_ERROR,
            error: getErrorMessage(err)
        });
    }
}

export const signOut = () => () => {
    auth.signOut();
}

export const clearAuthError = () => ({ type: types.CLEAR_AUTH_ERROR });

export const createAccount = ({ email, password, username }) => async dispatch => {
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
    } catch (err) {

        dispatch({
            type: types.AUTH_ERROR,
            error: getErrorMessage(err)
        });
    }
}
