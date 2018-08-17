import React, { Component } from 'react';
import '../App.css';


class Sort extends Component {
  render() {
    return (
        <div className="dropdown">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
          <i className="fas fa-sort-amount-down"></i> Sort
          </button>
          <div className="dropdown-menu">
            <ul className="dropdown-item">
              <i className="fas fa-sort-alpha-down"></i> A-Z
              
            </ul>
            
            <ul className="dropdown-item">
              <i className="fas fa-sort-alpha-up"></i> Z-A
            </ul>
          </div>
        </div> 
    );
  }
}

export default Sort;
