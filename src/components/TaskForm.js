import React, { Component } from 'react';
import '../App.css';

class Taskform extends Component {
  render() {
    return (

        <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Add task
                <span className="fa fa-times-circle float-right"></span>
              </h3>
            </div>

            <div className="panel-body">
              <form >
                <div className="form-group">
                  <label className="float-left">Task name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="#txtTaskName"
                    name = "txtTaskName"
                  />
                </div>
                
                <label className="float-left"> Status: sltTaskStatus </label>
                
                <select 
                  name="sltTaskStatus"
                  className ="form-control" 
                  required="required"
                >
                  <option value="1">Active</option>
                  <option value="0">Hidden</option>
                </select>

                <button type="submit" className="btn btn-default mt-15">Save</button>
                &nbsp;
                <button type="reset" className="btn btn-default mt-15">Clear</button>
              </form>
              
            </div>
        </div>
        
      
    );
  }
}

export default Taskform;
