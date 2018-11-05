import types from './types'
import { auth } from '../firebase';
import { getErrorMessage } from '../helpers';

export const signOut = () => () => {
    auth.signOut();
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
            localStorage.setItem('chat-uid', user.uid);

            dispatch({
                type: types.SIGN_IN,
                username: user.displayName
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
