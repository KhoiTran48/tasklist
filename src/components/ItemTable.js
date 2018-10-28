import React, { Component } from 'react';

class ItemTable extends Component {
  render() {
    return (
      <tr>
          <td>1</td>
          <td>Test</td>
          <td className="center">
              <button type="button" className="btn btn-success center">Kích Hoạt</button>
          </td>
          <td className="center">
              <button type="button" className="btn btn-success center">Edit</button>
              <button type="button" className="btn btn-success center">Delete</button>
          </td>
      </tr>
    );
  }
}

export default ItemTable;
