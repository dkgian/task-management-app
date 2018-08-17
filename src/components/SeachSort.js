import React, { Component } from 'react';
import '../App.css';


class SearchSort extends Component {
  render() {
    return (
    <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">      
                  <input 
                    type="text" 
                    name="txtKeywords" 
                    className="form-control" 
                    placeholder = "txtKeywords"
                    />
                  
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-default">
                      <i className="fas fa-search"></i> Search
                    </button>
                  </span>
                </div>        
              </div>
              
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
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
              </div>
            </div>
    );
  }
}

export default SearchSort;
