import * as Types from './../constants/ActionTypes';

export const ADD_TASK=(task)=>{
    return {
        type:Types.ADD_TASK,
        task
    }
}

export const UPDATE_TASK=(task)=>{
    return {
        type: Types.UPDATE_TASK,
        task
    }
}

export const DELTE_TASK=(task)=>{
    return {
        type: Types.DELETE_TASK,
        task
    }
}

export const UPDATE_STATUS=(task)=>{
    return {
        type: Types.UPDATE_STATUS,
        task
    }
}

export const LIST_ALL=()=>{
    return {
        type:Types.LIST_ALL
    }
}

export const OPEN_FORM=()=>{
    return {
        type:Types.OPEN_FORM
    }
}

export const CLOSE_FORM=()=>{
    return {
        type:Types.CLOSE_FORM
    }
}

export const TOGGLE_FORM=()=>{
    return {
        type:Types.TOGGLE_FORM
    }
}

export const FILTER_TABLE=(searchBy, searchValue)=>{
    return {
        type:Types.FILTER_TABLE,
        searchBy,
        searchValue
    }
}