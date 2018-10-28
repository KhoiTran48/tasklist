import * as Types from './../constants/ActionTypes';

var initialState={
    name:'',
    status:'active',
    isDisplay:true
}

const taskForm = (state=initialState, action)=>{
    var {name, status}=action.task;
    switch(action.type){
        case Types.OPEN_FORM:
            state={
                name:name,
                status:status,
                isDisplay: true
            }
            return [...state];
        case Types.CLOSE_FORM:
            state={
                name:'',
                status:'active',
                isDisplay:false
            }
            return [...state];
        case Types.TOGGLE_FORM:
            state.isDisplay=!state.isDisplay;
            return [...state];
        default:
            return [...state];
    }
}