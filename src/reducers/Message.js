import * as Types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var initialState=Message.WELCOME ? Message.WELCOME : 'Welcome';

var message = (state=initialState, action)=>{
    switch(action.type){
        case Types.ADD_TASK, Types.UPDATE_STATUS, Types.UPDATE_TASK, Types.DELETE_TASK:
            state=action.message;
            return [...state];
        default:
            return [...state];
    }
}