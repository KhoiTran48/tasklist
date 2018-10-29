import {combineReducers} from 'redux';
import TaskForm from './TaskForm';
import TableResult from './TableResult';
import Message from './Message';
import FilterTable from './FilterTable';

const myReducers=combineReducers({
    TaskForm,
    TableResult,
    Message,
    FilterTable
})
export default myReducers;