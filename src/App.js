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
      tasks : [] //id, name, status, 
    }
  }

  onToogleForm = () =>{
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
    //console.log(this.state.isDisplayForm);
    //this.onGenerateData = this.onGenerateData.bind(this);
  }

  onSubmit = (data) =>{
    let {tasks} = this.state;
    data.id = this.genId();
    
    tasks.push(data);
    this.setState({
      tasks : tasks,
      isDisplayForm: false
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  onUpdateStatus =(id)=>{
    let {tasks} = this.state
    var index = this.findIndex(id);
    console.log(index)
    if(index !== -1){
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks: tasks
      })

      console.log(index)
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  findIndex = (id) =>{
    let {tasks} = this.state;
    var result = -1
    tasks.forEach((task,index)=>{
      if(task.id === id){
        //console.log(index)
        result = index
      }
    })
    return result;
  }
  // onGenerateData = () =>{
  //   var tasks = [
  //     {
  //       id: this.genId(),
  //       name: 'Task 1',
  //       status: true
  //     },
  //     {
  //       id: this.genId(),
  //       name: 'Task 2',
  //       status: false
  //     },
  //     {
  //       id: this.genId(),
  //       name: 'Task 3',
  //       status: true
  //     }
  //   ]

  //   this.setState({
  //     tasks : tasks
  //   });

  //   localStorage.setItem('tasks',JSON.stringify(tasks));
    
  // }

  //this func runs before page is reloaded
  componentWillMount(){
    //check and get back data from Localstorage
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      })
    }
  }

  s4 = ()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  genId = () => {
    return this.s4() +'-'+ this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  render() {
    let { tasks, isDisplayForm } = this.state;
    let elmTaskform  = isDisplayForm? 
                      <TaskForm 
                        onCloseForm ={this.onToogleForm} 
                        onSubmit = {this.onSubmit}
                      /> 
                      : '';

    return ( 
      <div className="App container">
        <div>
          <h1>Tasks Management</h1>
          <hr/>
        </div>

        <div className="row">
          <div className={ this.state.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': ''}>
          {elmTaskform}
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
                
                {/* <button 
                  type="button" 
                  className="btn btn-danger float-left"
                  onClick={this.onGenerateData}
                  >
                  Generate Data
                </button> */}
                
            </div>

            <div className="row mt-15 ">  
              <Control/>  
            </div>
            
            <div className="row mt-15">
                     
              <TaskList 
                //tasks = {localStorage.getItem('tasks')}
                tasks = {tasks}
                onUpdateStatus = { this.onUpdateStatus }
              />
        
            </div>
          </div>         
        </div>
      </div>

    );
  }
}

export default App;
