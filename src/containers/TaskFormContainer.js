import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TableResult from './components/TableResult';
import AddButton from './components/AddButton';
import Message from './components/Message';

import * as actions from './../actions/index';

import {connect} from 'react-redux';

import

class TaskFormContainer extends Component {
  render() {
    return (
      <div>
        <h3 class="center">Task List</h3>
        <hr/>
        <div class="container">
            <div class="row">
              <TaskForm/>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <AddButton/>
                <Message/>
                <TableResult/>
              </div>
              
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        taskForm:state.TaskForm
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return {
        onAction:(data)=>{
            dispatch(actions.ADD_TASK);
        }
    }
}

export default TaskFormContainer;
