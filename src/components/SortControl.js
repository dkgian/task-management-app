import React, { Component } from 'react';
import '../App.css';

class SortControl extends Component {

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue)
    }

    componentWillReceiveProps(nextProps){
        
    }

  render() {
    return (
        <div className="dropdown">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <i className="fas fa-sort-amount-down"></i> Sort
            </button>
            <div className="dropdown-menu">
                <ul className="dropdown-item">
                    <a 
                        role= "button"
                        className = { (this.props.sortBy === 'name' && this.props.sortValue === 1)? 'sort_selected': ''}
                    >
                        <li style = {{cursor: 'pointer'}}
                            className="fas fa-sort-alpha-down "
                            onClick= {()=> this.onClick('name', 1)} //pass params? -> using ()=>{}
                        > A-Z</li>   
                    </a>                       
                </ul>
                
                <ul className="dropdown-item">
                <a  role= "button"
                        className = { (this.props.sortBy === 'name' && this.props.sortValue === -1)? 'sort_selected': ''}>
                    <li style = {{cursor: 'pointer'}}
                        className="fas fa-sort-alpha-down"
                        onClick= {()=> this.onClick('name',-1)}
                    > Z-A</li>
                </a>
                    
                </ul>
                <hr/>
                <ul className="dropdown-item">
                    <a  role= "button"
                        className = { (this.props.sortBy === 'status' && this.props.sortValue === 1)? 'sort_selected': ''}>
                        <li  
                             className="fas fa-sort-alpha-down"
                            style = {{cursor: 'pointer'}}
                            onClick= {()=> this.onClick('status',1)}
                        > Active</li>
                    </a> 
                </ul>
                <ul className="dropdown-item">
                    <a  role= "button"
                        className = { (this.props.sortBy === 'status' && this.props.sortValue === -1)? 'sort_selected': ''}>
                        <li  
                             className="fas fa-sort-alpha-down"
                            style = {{cursor: 'pointer'}}
                            onClick= {()=> this.onClick('status',-1)}
                        > Deactive</li>
                    </a>      
                </ul>
            </div>
        </div> 
    )
  }
}

export default SortControl;
