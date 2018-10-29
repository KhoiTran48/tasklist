import React, { Component } from 'react';
import * as Message from './../constants/Message';

class ItemTable extends Component {
  upadteStatus=(task)=>{
    var {onUpdateStatus, onChangeMessage}=this.props;
    onUpdateStatus(task);
    onChangeMessage(Message.UPDATE_STATUS_SUCCESS);
  }
  updateTask=(task)=>{
    var {onChangeInput, onChangeMessage}=this.props;
    onChangeInput(task);
    onChangeMessage(Message.UPDATING);
  }
  deleteTask=(task)=>{
    var {onDeleteTask, onChangeMessage, onChangeInput}=this.props;
    onDeleteTask(task);
    onChangeMessage(Message.DELETE_SUCCESS);
    var taskForm={
        id:0,
        name:'',
        status:'active'
    };
    onChangeInput(taskForm);
  }
  render() {
    var {index, task, onChangeInput, onUpdateStatus, onDeleteTask}=this.props;
    return (
      <tr>
          <td>{index}</td>
          <td>{task.name}</td>
          <td className="center">
              <button type="button" className="btn btn-success center"
                      onClick={()=>this.upadteStatus(task)}>{task.status==="active" ? "Kích Hoạt" : "Ẩn"}</button>
          </td>
          <td className="center">
              <button type="button" className="btn btn-success center"
                      onClick={()=>this.updateTask(task)}>Edit</button>
              <button type="button" className="btn btn-success center"
                      onClick={()=>this.deleteTask(task)}>Delete</button>
          </td>
      </tr>
    );
  }
}

export default ItemTable;
