import React, { Component } from 'react';
import ItemTable from './ItemTable';

class TableResult extends Component {
    showItemTask=()=>{
        var {tableResult, onChangeInput, onUpdateStatus, onDeleteTask, onChangeMessage}=this.props;
        var result=[];
        result=tableResult.map((item, index)=>{
            return <ItemTable 
                    index={index+1}
                    key={index} 
                    task={item} 
                    onChangeInput={onChangeInput}
                    onUpdateStatus={onUpdateStatus}
                    onDeleteTask={onDeleteTask}
                    onChangeMessage={onChangeMessage}
                    />
        })
        return result;
    }
  render() {
    return (
          <div className="row mt">
              <table className="table table-hover">
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
                              <input type="text" name="" id="" className="form-control" required="required" pattern="" title="" onChange={()=>{}   }/>
                          </td>
                          <td>
                              <select name="" id="" className="form-control" required="required">
                                  <option value="active">Kích Hoạt</option>
                                  <option value="inActive">Ẩn</option>
                              </select>
                          </td>
                      </tr>
                      {/* item table */}
                      {this.showItemTask()}
                  </tbody>
              </table>
          </div>
    );
  }
}

export default TableResult;
