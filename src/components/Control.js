import React, { Component } from 'react';
import '../App.css';
import SearchControl from './SearchControl'
import SortControl from './SortControl'

class Control extends Component {
  render() {
    return (
    <div className="row">
      
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <SearchControl
          onSearch = {this.props.onSearch}/>  
      </div>
      
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <SortControl
          onSort = {this.props.onSort}
          sortBy = {this.props.sortBy}
          sortValue = {this.props.sortValue} /> 
      </div>
   
    </div>
    );
  }
}

export default Control;
