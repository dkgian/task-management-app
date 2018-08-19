import React, { Component } from 'react';
import './App.css';

import TaskForm from './components/TaskForm'
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDisplayForm : false,
      tasks : []
    }
  }

  onToogleForm = () =>{
    console.log('1');
    this.setState({
      tasks : [],
      isDisplayForm : !this.state.isDisplayForm
    })
    console.log(this.state.isDisplayForm);
  }

  render() {
    let { tasks, isDisplayForm } = this.state;
    let elmTaskform  = isDisplayForm? <TaskForm/> : '';

    return ( 
      <div className="App container">
        <div>
          <h1>Tasks Management</h1>
          <hr/>
        </div>

        <div className="row">
          <div className={ this.state.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': 'collapse'}>
            <TaskForm
              onToogleForm = { this.onToogleForm }
            />
          </div>       

          <div className={ this.state.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
     
            <div className="row">
                <button 
                  type="button" 
                  className="btn btn-primary float-left"
                  onClick = { this.onToogleForm }
                  >
                   <i className="fas fa-plus"></i> Add a task
                </button>
            </div>

            <div className="row mt-15 ">  
              <Control/>  
            </div>
            
            <div className="row mt-15">
                     
              <TaskList />
        
            </div>
          </div>         
        </div>
      </div>

    );
  }
}

export default App;
