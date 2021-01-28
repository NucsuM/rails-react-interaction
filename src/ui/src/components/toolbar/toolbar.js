import React, { useState } from "react";
import "./toolbar.css";
import Textbox from "../textbox";

const sampleData = JSON.parse('[{"id":1,"albumId":1,"title":"accusamus beatae ad facilis cum similique qui sunt","url":"https://via.placeholder.com/600/92c952","thumbnailUrl":"https://via.placeholder.com/150/92c952","created_at":"2021-01-18T16:01:41.921Z","updated_at":"2021-01-18T16:01:41.921Z"},{"id":2,"albumId":1,"title":"reprehenderit est deserunt velit ipsam","url":"https://via.placeholder.com/600/771796","thumbnailUrl":"https://via.placeholder.com/150/771796","created_at":"2021-01-18T16:01:41.921Z","updated_at":"2021-01-18T16:01:41.921Z"}]')
class ToolBar extends React.Component { 
  constructor(props) { 
    super(props);
  } 

  state = { 
    apiData: [],
    itemId:null,
    itemTitle:null 
  };
  
  fetchData = async () => {
    const response = await fetch('http://192.168.99.100:30000/photos/fetch')
    const data = await response.json()
    this.props.setData(data)
  }

  clearTable = () => {
    this.props.setData([]);
  }

  postData = async () => {
    let newValues = JSON.stringify({ id: this.state.itemId, title: this.state.itemTitle });
    const token = document.querySelector('[name=csrf-token]').content
    const requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token },
          body: newValues
        };
    await fetch('http://192.168.99.100:30000/photos/update', requestOptions)
    await this.fetchData();
  }

    render() {
    return (
      <>
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
          <button className="btn-submit" type="button" onClick={this.postData}>
            submit
          </button>
        </div>
        <div className='grid-item'>
          <Textbox 
            class="tb-id" 
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
  }

export default ToolBar;
