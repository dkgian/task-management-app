import React, { Component } from 'react';
import '../App.css';


class Search extends Component {
  render() {
    return (
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
    );
  }
}

export default Search;
