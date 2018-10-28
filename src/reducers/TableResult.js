import * as Types from './../constants/ActionTypes';

var taskStorage= JSON.parse(localStorage.getItem('task'));
var initialState= taskStorage ? taskStorage : [];

var tableResult= (state=initialState, action)=>{
    var {task}=action;
    switch(action.type){

        case Types.ADD_TASK:
            var index=state.findIndex((item)=>{
                return item.id==task.id
            })
            if(index !== -1){
                state[index]={
                    name:task.name,
                    status:task.status
                }
            }else{
                state.push({
                    id:state.length + 1,
                    name:task.name,
                    status:task.status
                })
            }
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        case Types.DELETE_TASK:
            var index=state.findIndex((item)=>{
                return item.id=task.id
            })
            if(index!=-1){
                state.splice(index,1);
            }
            localStorage.setItem('task',JSON.stringify(state));
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
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default tableResult;