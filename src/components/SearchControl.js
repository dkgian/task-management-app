import React, { Component } from 'react';
import '../App.css';

 
class SearchControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    onChange = (event)=>{
        //let name = event.target.name;
        let value = event.target.value;
        this.setState({
            keyword: value
        })    
    }

    onSearch = ()=>{
        this.props.onSearch(this.state.keyword)
    }


    render() {
        var {keyword} = this.state
        return ( 
            <div className="input-group">      
                <input 
                    type="text"
                    name="txtKeywords" 
                    className="form-control" 
                    placeholder = "Search..."
                    onChange = {this.onChange}
                    value = {keyword}
                />
                
                <span className="input-group-btn">
                <button 
                    type="button" 
                    className="btn btn-default"
                    onClick = {this.onSearch}>
                    <i className="fas fa-search"></i> Search
                </button>
                </span>
            </div> 
        );
    }
}

export default SearchControl;
