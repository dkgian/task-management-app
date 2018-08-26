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
      tasks : [], //id, name, status, 
      taskEditing : null,
      filter: {
        name:'',
        status: -1
      }
    }
  }

  onToogleForm = () =>{
    if(this.state.isDisplayForm && this.state.taskEditing !== null){
      this.setState({
        isDisplayForm : true,
        taskEditing : null
      })
    }else{
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEditing : null
      })
    }
  }

  onShowForm = ()=>{
    this.setState({
      isDisplayForm : true
    })
  }

  onCloseForm = ()=>{
    this.setState({
      isDisplayForm : false,
      taskEditing : null
    })
  }

  onSubmit = (data) =>{
    let {tasks} = this.state;

    if(data.id === ''){ // add new
      data.id = this.genId();
      tasks.push(data);
     
    }else{
      let index = this.findIndex(data.id); //edit 
      tasks[index] = data;
    }

    this.setState({
      tasks : tasks,
      isDisplayForm: false,
      taskEditing : null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))   
  }

  onUpdateStatus =(id)=>{
    let {tasks} = this.state
    let index = this.findIndex(id);
    if(index !== -1){
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  onDeleteTask = (id) =>{
    let {tasks} = this.state;
    let index = this.findIndex(id);
    let confirmDelete = this.warningPopup(tasks[index].name)
    if(confirmDelete){
      tasks.splice(index,1)
    this.setState({
      tasks : tasks
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
    }else{
      console.log("nothing happened")
    }
  }

  onUpdate = (id) =>{
    let {tasks} = this.state
    let index = this.findIndex(id)
    let taskEditing = tasks[index];
    this.setState({
      taskEditing : taskEditing
    });

    this.onShowForm()
  }

  onFilter = (filterName, filterStatus)=>{
    filterStatus = parseInt(filterStatus, 10) //decimal parsing
    this.setState({
      filter:{
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
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

  warningPopup = (taskName) =>{
    var confirm = false
    if(window.confirm(`Delete "${taskName}", sure?`)){
      confirm = true
    }
    return confirm
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

  //this func runs before the component is mounted
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
    let { tasks, isDisplayForm, taskEditing, filter } = this.state;
    //quick filter function
    
    if(filter){
      //filter by name
      if(filter.name){
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1 //-1: not found match keys
        })
      }
      //filter by status
      tasks = tasks.filter((task)=>{
        if(filter.status === -1){
          return task
        }else{
          return task.status === (filter.status === 1 ? true : false)
        }
      })
    }
    let elmTaskform  = isDisplayForm? 
                      <TaskForm 
                        onCloseForm ={this.onToogleForm} 
                        onSubmit = {this.onSubmit}
                        taskEditing = {taskEditing}
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
                onDeleteTask = { this.onDeleteTask }
                onUpdate = {this.onUpdate}
                onFilter = {this.onFilter}
              />
        
            </div>
          </div>         
        </div>
      </div>

    );
  }
}

export default App;
