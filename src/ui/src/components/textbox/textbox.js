import React from "react";
import './textbox.css'

const Textbox = (props) => {
  return (
    <div className={ props.class }>
      <label>{props.name + ":" }</label>
      <input type="text" id="tb-id" name="tb-name" onChange={props.onChange}></input>
    </div>
  );
};

export default Textbox;
