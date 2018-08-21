import React, { Component } from 'react';
import '../App.css';

class TaskItem extends Component {

  render() {
    let { task, index } = this.props;

    return ( 
        <tr className="task-item">
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td className="item-center">
              <span 
                className={ task.status === true? 'label label-success': 'label label-danger'}>
                          { task.status === true? 'Active' : 'Deactive'}
              </span>        
            </td>
            <td>        
            <button type="button" className="btn btn-warning"> <i className="fas fa-edit"></i> Edit</button>
            &nbsp;
            <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i> Delete</button>  
            </td>
        </tr>
    );
  }
}

export default TaskItem;