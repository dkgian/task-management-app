import React, { Component } from 'react';
import '../App.css';
import TaskItem from './TaskItem';


class TaskList extends Component {
  
  render() {
    //var tasks = JSON.parse(this.props.tasks);
    let {tasks} = this.props;
    //console.log(tasks)

    var elmTaskItems = tasks.map((task,index)=>{
      return (
        <TaskItem
          key = {task.id}
          index = {index}
          task = {task}
          onUpdateStatus = {this.props.onUpdateStatus}
        />
      )
    })
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
                <option value="0">Deactive</option>
              </select>   
            </td>
            <td></td>    
          </tr>
          {elmTaskItems}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
