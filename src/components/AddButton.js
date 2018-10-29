import React, { Component } from 'react';
import * as Message from './../constants/Message';
class AddButton extends Component {
  toggleForm=()=>{
    this.props.onToggleForm();
    this.props.onChangeMessage(Message.WELCOME)
  }
  render() {
    return (
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <button type="button" className="btn btn-danger"
                      onClick={this.toggleForm}>Thêm Mới Công Việc</button>
          </div>
      </div>
    );
  }
}

export default AddButton;
