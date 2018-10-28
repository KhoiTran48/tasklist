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
        var {taskForm, onAddTask, onChangeMessage}=this.props;
        onAddTask(taskForm);
        if(taskForm.id===0){
            onChangeMessage(Message.ADD_SUCCESS);
        }else{
            onChangeMessage(Message.UPDATE_SUCCESS);
        }
    }
  render() {
    var {taskForm, onAddTask, onCloseForm, onChangeMessage}=this.props;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-danger">
                <div className="panel-heading">
                      <h3 className="panel-title">{taskForm.id===0 ? Titles.NEW_TASK : Titles.UPDATE_TASK}</h3>
                </div>
                <div className="panel-body">
                    <form action="" method="POST" role="form">
                          <div className="form-group">
                              <label >Tên</label>
                              <input type="text" name="name" className="form-control" id="" placeholder="Input field"
                                     onChange={this.onHandleChange}
                              />
                          </div>
                          <div className="form-group">
                              <label  className="">Trạng Thái:</label>
                              <div className="">
                                  <select name="status" id="" className="form-control" required="required"
                                        onChange={this.onHandleChange}>
                                      <option value="active">Kích Hoạt</option>
                                      <option value="inActive">Ẩn</option>
                                  </select>
                              </div>
                          </div>
                          <div className="center">
                              <button type="submit" className="btn btn-primary"
                                onClick={this.onAddTask}
                              >Thêm</button>
                              <button type="submit" className="btn btn-primary">Hủy Bỏ</button>
                          </div>
                    </form>
                </div>
          </div>
      </div>
    );
  }
}

export default TaskForm;
