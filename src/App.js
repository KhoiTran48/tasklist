import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskFormContainer from './containers/TaskFormContainer';
import TableResultContainer from './containers/TableResultContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Task List</h3>
        <hr/>
        <div className="container">
            <div className="row">
              <TaskFormContainer/>
              <TableResultContainer/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
