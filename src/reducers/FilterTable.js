import * as Types from './../constants/ActionTypes';

var initialState={
        name:'',
        status:'all'
    };
const filter = (state=initialState, action)=>{
    switch(action.type){
        case Types.FILTER_TABLE:
        var {searchBy, searchValue}=action;
        state={
                ...state,
                [searchBy]:searchValue
                
            }
            console.log('reducers filter : ', state);
            return {...state};
        default:
            return {...state};
    }
}

export default filter;