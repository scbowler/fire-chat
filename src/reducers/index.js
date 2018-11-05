import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import chat from './chat_reducer';
import user from './user_reducer';

export default combineReducers({ chat, form, user });
