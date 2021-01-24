import React from "react";
import './textbox.css'

const Textbox = (props) => {
  return (
    <div className={ props.class }>
      <label>{props.name + ":" }</label>
      <input type="text" id="filter" name="filter"></input>
    </div>
  );
};

export default Textbox;
