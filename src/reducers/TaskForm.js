import * as Types from './../constants/ActionTypes';

var initialState={
        id:0,
        name:'',
        status:'active',
        isDisplay:true
    };
const taskForm = (state=initialState, action)=>{
    switch(action.type){
        case Types.OPEN_FORM, Types.CHANGE_INPUT:
        var {id, name, status}=action.dataForm;
        state={
                id:id,
                name:name,
                status:status,
                isDisplay: true
            }
            return {...state};
        case Types.CLOSE_FORM:
            state={
                id:0,
                name:'',
                status:'active',
                isDisplay:false
            }
            return {...state};
        case Types.TOGGLE_FORM:
            var isDisplay=!state.isDisplay;
            state={
                id:0,
                name:'',
                status:'active',
                isDisplay:isDisplay
            }
            return {...state};
        default:
            return {...state};
    }
}

export default taskForm;