import types from '../actions/types';

const DEFAULT_STATE = {
    chatRooms: null,
    roomMessages: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_CHAT_ROOMS:
            return { ...state, chatRooms: action.rooms };
        default:
            return state;
    }
}
