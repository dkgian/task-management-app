import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="text-center">
          <h1>Tasks Management</h1>
          <hr/>
        </div>

        
        <div className="row">
          
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */} 
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

                    <button type="submit" className="btn btn-default mt-15">Submit</button>
                  </form>
                  
                </div>
            </div>
            
          </div>
          
          
          
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
     
            <div className="row">
                <button type="button" className="btn btn-primary float-left">
                   <i className="fas fa-plus"></i> Add a task
                </button>
            </div>

            <div className="row mt-15 ">  
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="input-group">      
                  <input 
                    type="text" 
                    name="txtKeywords" 
                    className="form-control" 
                    placeholder = "txtKeywords"
                    />
                  
                  <span class="input-group-btn">
                    <button type="button" className="btn btn-default">
                      <i class="fas fa-search"></i> Search
                    </button>
                  </span>
                </div>        
              </div>
              
              <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="dropdown">
                  
                </div>
              </div>
              
            </div>
            
            
            <div class="row mt-15">
              
            </div>
            

          </div>
          

        </div>
        

      </div>
    );
  }
}

export default App;
