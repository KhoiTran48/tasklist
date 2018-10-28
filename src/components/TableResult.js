import React, { Component } from 'react';
import ItemTable from './ItemTable';

class TableResult extends Component {
  render() {
    return (
          <div class="row mt">
              <table class="table table-hover">
                  <thead>
                      <tr>
                          <th>STT</th>
                          <th>Tên</th>
                          <th>Trạng Thái</th>
                          <th>Hành Động</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td></td>
                          <td>
                              <input type="text" name="" id="" class="form-control" value="" required="required" pattern="" title=""/>
                          </td>
                          <td>
                              <select name="" id="" class="form-control" required="required">
                                  <option value="active">Kích Hoạt</option>
                                  <option value="inActive">Ẩn</option>
                              </select>
                          </td>
                      </tr>
                      {/* item table */}
                      <ItemTable/>
                      <ItemTable/>
                      <ItemTable/>
                  </tbody>
              </table>
          </div>
    );
  }
}

export default TableResult;
