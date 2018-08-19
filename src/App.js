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
      tasks : [] //id, name, status
    }
  }

  onToogleForm = () =>{
    this.setState({
      tasks : [],
      isDisplayForm : !this.state.isDisplayForm
    })
    //console.log(this.state.isDisplayForm);
  }

  onGenerateData = () =>{
    var tasks = [
      {
        id: this.genId(),
        name: 'task1',
        status: true
      },
      {
        id: this.genId(),
        name: 'task2',
        status: false
      },
      {
        id: this.genId(),
        name: 'task3',
        status: true
      }
    ]
    console.log(tasks)
  }

  s4 = ()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  genId = () => {
    return this.s4() +'-'+ this.s4() + '-' + this.s4() + '-' + this.s4();
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
                &nbsp;
                <button 
                  type="button" 
                  className="btn btn-danger float-left"
                  onClick={this.onGenerateData}
                  >
                  Generate Data
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
