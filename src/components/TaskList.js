import React, { Component } from 'react';
import '../App.css';
import TaskItem from './TaskItem';

import { connect } from 'react-redux'


class TaskList extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1  // -1:all, 1: active, 0: deactive
    }
  }

  onChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    let {filterName, filterStatus} = this.state;

    this.props.onFilter(
      name === 'filterName'? value : filterName,
      name === 'filterStatus'? value : filterStatus)

    this.setState({
      [name]: value //setState filterName, filterStatus
    })


  }

  render() {
    //var tasks = JSON.parse(this.props.tasks);
    let {tasks} = this.props;
    console.log(tasks)
    let {filterName, filterStatus} = this.setState;
  
    var elmTaskItems = tasks.map((task,index)=>{
      return (
        <TaskItem
          key = {task.id}
          index = {index}
          task = {task}
          onUpdateStatus = {this.props.onUpdateStatus}
          onDeleteTask = {this.props.onDeleteTask}
          onUpdate = {this.props.onUpdate}
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
                name="filterName"
                className="form-control"
                placeholder="#Quick search by name"
                value = {filterName}
                onChange = { this.onChange }
                />
            </td>
            <td>   
              <select 
                name="filterStatus"
                className="form-control" 
                value = {filterStatus}
                onChange = { this.onChange }
                >
                <option value="-1">All</option>
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

const mapStateToProps = (state) => {
  return {
    tasks : state.tasks
  }
}

export default connect(mapStateToProps, null)(TaskList);
