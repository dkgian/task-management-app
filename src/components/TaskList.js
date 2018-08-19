import React, { Component } from 'react';
import '../App.css';
import TaskItem from './TaskItem';


class TaskList extends Component {
  

  render() {
    return ( 
        <table className="table table-bordered table-hover">
        <thead className="text-center">
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Status</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            </td>
            <td> 
              <input 
                type="text" 
                name="txtFilter"
                className="form-control"
                placeholder="#Quick search by name"
                />
            </td>
            <td>   
              <select 
                name="sltStatus"
                className="form-control" 
                >
                <option value="2">All</option>
                <option value="1">Active</option>
                <option value="0">Hidden</option>
              </select>   
            </td>
            <td></td>    
          </tr>

          <TaskItem/>

        </tbody>
      </table>
    );
  }
}

export default TaskList;
