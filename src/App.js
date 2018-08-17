import React, { Component } from 'react';
import './App.css';

import TaskForm from './components/TaskForm'
import SearchSort from './components/SeachSort';

class App extends Component {
  render() {
    return (
      
      <div className="App container">
        <div>
          <h1>Tasks Management</h1>
          <hr/>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm/>
          </div>       

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
     
            <div className="row">
                <button type="button" className="btn btn-primary float-left">
                   <i className="fas fa-plus"></i> Add a task
                </button>
            </div>

            <div className="row mt-15 ">  
              <SearchSort/>
              
            </div>
            
            
            <div className="row mt-15">
                     
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

                  <tr className="task-item">
                    <td>2</td>
                    <td>Continue update</td>
                    <td>Active</td>
                    <td>        
                      <button type="button" className="btn btn-warning"> <i className="fas fa-edit"></i> Edit</button>
                      &nbsp;
                      <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i> Delete</button>  
                    </td>
                  </tr>

                </tbody>
              </table>
              
            </div>
            

          </div>
          

        </div>
        

      </div>
    );
  }
}

export default App;
