import { chatTypes as types } from '../actions/types';

const DEFAULT_STATE = {
    chatRooms: null,
    currentRoom: null,
    messages: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.CLEAR_ROOM_DATA:
            return { ...DEFAULT_STATE };
        case types.GET_CHAT_LOG:
            return { ...state, messages: action.messages };
        case types.GET_CHAT_ROOMS:
            return { ...state, chatRooms: action.rooms };
        case types.GET_ROOM_INFO:
            return { ...state, currentRoom: action.currentRoom };
        default:
            return state;
    }
}
