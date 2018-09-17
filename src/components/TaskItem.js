import React, { Component } from 'react';
import '../App.css';

import * as actions from './../actions/index'

import {connect} from 'react-redux'

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id)
  }

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id)
  }

  render() {
    let { task, index } = this.props;

    return ( 
      <tr className="task-item">
          <td>{index+1}</td>
          <td>{task.name}</td>
          <td className="item-center">
            <span 
              style = {{cursor:'pointer'}}
              className={ 
                  task.status === true? 'label label-success': 
                  'label label-danger'}
              onClick = {this.onUpdateStatus}
            >
              { task.status === true? 'Active' : 'Deactive'}
            </span>        
          </td>
          <td>        
          <button 
            type="button" 
            className="btn btn-warning"
            onClick = { this.onUpdate }
          > 
            <i className="fas fa-edit"></i> Edit
          </button>
          &nbsp;
          <button 
            type="button" 
            className="btn btn-danger"
            onClick = { this.onDeleteTask }
          >
            <i className="fas fa-trash-alt"></i> Delete</button>  
          </td>
      </tr>
    );
  }
}

const mapStateToProps = state =>{
  return {

  }
}

const mapDispatchToProps = (dispatch, props)=>{
  return {
    onUpdateStatus : (id) =>{
      dispatch(actions.updateStatus(id) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
