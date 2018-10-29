import React, { Component } from 'react';
import * as Titles from './../constants/Title';
import * as Message from './../constants/Message';

class TaskForm extends Component {
    
    onHandleChange=(event)=>{
        var {taskForm, onChangeInput}=this.props;
        var target=event.target;
        taskForm=Object.assign({}, taskForm, {
            [target.name]:target.value
        });
        onChangeInput(taskForm);
    }
    onAddTask=(event)=>{
        event.preventDefault();
        var {taskForm, onAddTask, onChangeMessage, onChangeInput}=this.props;
        onAddTask(taskForm);
        if(taskForm.id===0){
            onChangeMessage(Message.ADD_SUCCESS);
        }else{
            onChangeMessage(Message.UPDATE_SUCCESS);
        }
        taskForm={
            id:0,
            name:'',
            status:'active'
        };
        onChangeInput(taskForm);
    }
    cancelTask=(event)=>{
        event.preventDefault();
        var {taskForm, onChangeInput, onChangeMessage}=this.props;
        taskForm={
            id:0,
            name:'',
            status:'active'
        };
        onChangeInput(taskForm);
        onChangeMessage(Message.WELCOME);
    }
  render() {
    var {taskForm, onAddTask, onCloseForm, onChangeMessage}=this.props;
    return (
      <div className={taskForm.isDisplay ? "col-xs-4 col-sm-4 col-md-4 col-lg-4": "hide"}>
          <div className="panel panel-danger">
                <div className="panel-heading">
                      <h3 className="panel-title">{taskForm.id===0 ? Titles.NEW_TASK : Titles.UPDATE_TASK}</h3>
                </div>
                <div className="panel-body">
                    <form action="" method="POST" role="form">
                          <div className="form-group">
                              <label >Tên</label>
                              <input type="text" name="name" className="form-control" id="" placeholder="Input field" required="required"
                                     onChange={this.onHandleChange}
                                     value={taskForm.name}
                              />
                          </div>
                          <div className="form-group">
                              <label  className="">Trạng Thái:</label>
                              <div className="">
                                  <select name="status" id="" className="form-control" required="required"
                                        onChange={this.onHandleChange}
                                        value={taskForm.status}>
                                      <option value="active">Kích Hoạt</option>
                                      <option value="inActive">Ẩn</option>
                                  </select>
                              </div>
                          </div>
                          <div className="center">
                              <button type="submit" className="btn btn-primary"
                                onClick={this.onAddTask}
                              >Thêm</button>
                              <button type="button" className="btn btn-primary"
                                onClick={this.cancelTask}>Hủy Bỏ</button>
                          </div>
                    </form>
                </div>
          </div>
      </div>
    );
  }
}

export default TaskForm;
