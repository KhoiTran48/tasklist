import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import TaskForm from './components/TaskForm';
import TableResult from './components/TableResult';
import AddButton from './components/AddButton';
import Message from './components/Message';

import TaskFormContainer from './containers/TaskFormContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Task List</h3>
        <hr/>
        <div className="container">
            <div className="row">
              <TaskFormContainer/>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <AddButton/>
                <Message/>
                <TableResult/>
              </div>
              
            </div>
        </div>
      </div>
    );
  }
}

export default App;
