import * as Types from './../constants/ActionTypes';

var taskStorage= JSON.parse(localStorage.getItem('task'));
var initialState= taskStorage ? taskStorage : [];

var tableResult= (state=initialState, action)=>{
    var {task}=action;
    switch(action.type){
        case Types.ADD_TASK:
            state.push({
                id:state.length + 1,
                name:task.name,
                status:task.status
            })
            return [...state];
        case Types.UPDATE_TASK:
            var index=state.findIndex((item)=>{
                return item.id=task.id
            })
            if(index != -1){
                state[index]={
                    name:task.name,
                    status:task.status
                }
            }
            return [...state];
        case Types.DELETE_TASK:
            var index=state.findIndex((item)=>{
                return item.id=task.id
            })
            if(index!=-1){
                state.splice(index,1);
            }
            return [...state];
        case Types.UPDATE_STATUS:
            var index=state.findIndex((item)=>{
                return item.id=task.id
            })
            if(index != -1){
                var status="active";
                if(state[index].status === "active"){
                    status="inActive";
                }
                state[index]={
                    name:task.name,
                    status:status
                }
            }
            return [...state];
        default:
            return [...state];
    }
}
