import React, { Component } from 'react';
import TaskForm from './../components/TaskForm';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class TaskFormContainer extends Component {
  render() {
      var {taskForm, onAddTask, onCloseForm, onChangeMessage, onChangeInput}=this.props;
    return (
      <TaskForm
        taskForm={taskForm}
        onAddTask={onAddTask}
        onCloseForm={onCloseForm}
        onChangeMessage={onChangeMessage}
        onChangeInput={onChangeInput}
      >
      </TaskForm>
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
        onAddTask:(task)=>{
            dispatch(actions.ADD_TASK(task));
        },
        onCloseForm:()=>{
            dispatch(actions.CLOSE_FORM());
        },
        onChangeMessage:(message)=>{
            dispatch(actions.CHANGE_MESSAGE(message))
        },
        onChangeInput:(dataForm)=>{
            dispatch(actions.CHANGE_INPUT(dataForm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
