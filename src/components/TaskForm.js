import React, { Component } from 'react';
import '../App.css';

class Taskform extends Component {

  constructor(props){
    super(props);
    this.state = {
      id    : '',
      name  : '',
      status: false
    }
  }

  componentWillMount = ()=>{
    if(this.props.taskEditing){
      this.setState({
        id     : this.props.taskEditing.id,
        name   : this.props.taskEditing.name,
        status : this.props.taskEditing.statuss
      });
    }
    
  }

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if(name === "status"){
      value = event.target.value === 'true'? true:false
    }
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    //Cast boolean before passing to App
    //this.props.onSubmit(this.state.name, this.state.status === "true"? true:false);
    this.props.onSubmit(this.state)
  }


  render() {
    let {id} = this.state;
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">
                { id !== '' ? 'Edit Task': 'Add Task' }
                <span 
                style = { {cursor:'pointer'} }
                onClick = { this.props.onCloseForm }
                className="fa fa-times-circle float-right"></span>
              </h3>
            </div>

            <div className="panel-body">
              <form onSubmit={this.onsubmit} >
                <div className="form-group">
                  <label className="float-left">Task name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name = "name"
                    value = { this.state.name }
                    onChange = { this.onChange }
                  />
                </div>
                
                <label className="float-left"> Status:</label>
                
                <select 
                  onChange = { this.onChange }
                  value = { this.state.status }
                  name="status"
                  className ="form-control" 
                  required="required"
                >
                  <option value={true}> Active </option>
                  <option value={false}> Deactive </option>
                </select>

                <button 
                  onClick = {this.onSubmit}
                  type="submit" 
                  className="btn btn-success mt-15">Save</button>
                &nbsp;
                <button type="reset" className="btn btn-danger mt-15">Clear</button>
              </form>
              
            </div>
        </div>    
    );
  }
}

export default Taskform;
