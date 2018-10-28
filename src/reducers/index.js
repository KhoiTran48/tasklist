import {combineReducers} from 'redux';
import TaskForm from './TaskForm';
import TableResult from './TableResult';
import Message from './Message';

export const myReducers=combineReducers({
    TaskForm,
    TableResult,
    Message
})