import React, { useState } from "react";
import "./toolbar.css";
import Request from 'superagent'; 
import Textbox from "../textbox";


class ToolBar extends React.Component {
  
  constructor() {
    super();
    this.state = { 
      data: [] 
    };
  }

  

  async fetchData (e) {

    const response = await Request.get('http://192.168.99.100:30000/photos/fetch')
    console.log(response.text);
    // this.setState({ data: response.text });
    const [data, setData] = useState(0);
    setData(response.text);
  }

  render() {
    

    return (
      <div className="grid-container">
        <div className='grid-item'>
          <button className="btn-fetch" type="button" onClick={this.fetchData}>
            fetch data
          </button>
        </div>
        <div className='grid-item'>
          <button className="btn-clear" type="button">
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
          <Textbox class="tb-id" name={'id'} />
        </div>
        <div className='grid-item'>
          <Textbox class="tb-title" name={'title'} />
        </div>
        <div className='grid-item' ></div>
      </div>
    );
  }
}

export default ToolBar;
