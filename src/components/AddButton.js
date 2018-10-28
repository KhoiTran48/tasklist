import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    return (
      <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <button type="button" class="btn btn-danger">Thêm Mới Công Việc</button>
          </div>
      </div>
    );
  }
}

export default AddButton;
