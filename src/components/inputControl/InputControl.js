import React from 'react'
import "./inputControl.css"

const InputControl = (props) => {
  return (
    <div className="containers">
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}/>
    </div>
  )
}

export default InputControl
