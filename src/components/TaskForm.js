import React, { Component } from 'react';

class TaskForm extends Component {
  render() {
    return (
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="panel panel-danger">
                <div class="panel-heading">
                      <h3 class="panel-title">Thêm Mới Công Việc</h3>
                </div>
                <div class="panel-body">
                    <form action="" method="POST" role="form">
                          <div class="form-group">
                              <label for="">Tên</label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>>
                          </div>
                          <div class="form-group">
                              <label for="" class="">Trạng Thái:</label>
                              <div class="">
                                  <select name="" id="" class="form-control" required="required">
                                      <option value="active">Kích Hoạt</option>
                                      <option value="inActive">Ẩn</option>
                                  </select>
                              </div>
                          </div>
                          <div class="center">
                              <button type="submit" class="btn btn-primary">Thêm</button>
                              <button type="submit" class="btn btn-primary">Hủy Bỏ</button>
                          </div>
                    </form>
                </div>
          </div>
      </div>
    );
  }
}

export default TaskForm;
