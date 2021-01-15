import React from "react";
import Textbox from "../textbox";
import "./toolbar.css";

class ToolBar extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <button className="btn-fetch" type="button">
          fetch data
        </button>
        <button className="btn-clear" type="button">
          clear table
        </button>
        <Textbox className="textbox" />
      </div>
    );
  }
}

export default ToolBar;
