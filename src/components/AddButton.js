import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <button type="button" className="btn btn-danger">Thêm Mới Công Việc</button>
          </div>
      </div>
    );
  }
}

export default AddButton;
