import React, { Component } from 'react';
import {connect} from 'react-redux';

class Message extends Component {
  render() {
    return (
      <div className="alert alert-success">
        {this.props.message}
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      message:state.Message
  }
}

export default connect(mapStateToProps, null)(Message);
