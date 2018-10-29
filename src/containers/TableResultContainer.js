import React, { Component } from 'react';
import TaskForm from './../components/TaskForm';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

import TableResult from './../components/TableResult';
import AddButton from './../components/AddButton';
import Message from './../components/Message';

class TableResultContainer extends Component {
  render() {
      var {taskForm, tableResult, onToggleForm, onChangeInput, onUpdateStatus, onDeleteTask, onChangeMessage}=this.props;
    return (
        <div className={taskForm.isDisplay ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
        <AddButton
            onToggleForm={onToggleForm}
            onChangeMessage={onChangeMessage}
        />
        <Message/>
        <TableResult
            tableResult={tableResult}
            onChangeInput={onChangeInput}
            onUpdateStatus={onUpdateStatus}
            onDeleteTask={onDeleteTask}
            onChangeMessage={onChangeMessage}
        />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        tableResult:state.TableResult,
        taskForm:state.TaskForm
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return {
        
        onChangeMessage:(message)=>{
            dispatch(actions.CHANGE_MESSAGE(message))
        },
        onChangeInput:(dataForm)=>{
            dispatch(actions.CHANGE_INPUT(dataForm))
        },
        onToggleForm:()=>{
            dispatch(actions.TOGGLE_FORM());
        },
        onUpdateStatus:(task)=>{
            dispatch(actions.UPDATE_STATUS(task))
        },
        onDeleteTask:(task)=>{
            dispatch(actions.DELTE_TASK(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableResultContainer);
