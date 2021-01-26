import React, { useState } from "react";
import "./toolbar.css";
import Textbox from "../textbox";

// class ToolBar extends React.Component { 
  const ToolBar = (props) => {  
  state = { 
    // apiData: [],
    itemId:null,
    itemTitle:null 
  };
  
  fetchData = (event) => {
    fetch('http://192.168.99.100:30000/photos/fetch')
    .then(response => response.json())
    // .then(data => this.setState({apiData: JSON.parse(data)}))
    .then(props.setData(JSON.parse(data)))
    // .then(console.log(this.state.apiData.length)) 
  }

  clearTable = (event) => {
    this.props.setData = [];
  }

  postData = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: itemId, title: itemTitle })
    };
    fetch('http://192.168.99.100:30000/photos/create', requestOptions)
    .then(response => response.json())
    .then(console.log(response))
  }

  // render() {
    return (
      <>
      <h1>{this.state.itemId + ' <-> ' + this.state.itemTitle}</h1>
      <div className="grid-container">
        <div className='grid-item'>
          <button className="btn-fetch" type="button" onClick={this.fetchData}>
            fetch data
          </button>
        </div>
        <div className='grid-item'>
          <button className="btn-clear" type="button" onClick={this.clearTable}>
            clear table
          </button>
        </div>
        <div className='grid-item' ></div>
        <div className='grid-item' ></div>
        <div className='grid-item'>
          <button className="btn-submit" type="button">
            submit
          </button>
        </div>
        <div className='grid-item'>
          <Textbox class="tb-id" 
          name={'id'} 
          onChange={(e) => {
            this.setState({...this.state, itemId: e.target.value })
          }}
          />
        </div>
        <div className='grid-item'>
          <Textbox 
            class="tb-title" 
            name={'title'} 
            onChange={(e) => {
              this.setState({...this.state, itemTitle: e.target.value })
            }}
            />
        </div>
        <div className='grid-item' ></div>
      </div>
      </>
    );
  }
// }

export default ToolBar;
