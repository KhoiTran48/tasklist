import * as Types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var initialState=Message.WELCOME ? Message.WELCOME : 'Welcome';

var message = (state=initialState, action)=>{
    switch(action.type){
        case Types.CHANGE_MESSAGE:
            state=action.message;
            return state;
        default:
            return state;
    }
}

export default message;