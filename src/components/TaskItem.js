import React, { Component } from 'react';
import '../App.css';


class TaskItem extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: 'dd',
        status: false
    }
  }

  render() {
    return ( 
        <tr className="task-item">
            <td>1</td>
            <td>Upload to Git</td>
            <td>Active</td>
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
