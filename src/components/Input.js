import React from 'react';
import './Input.css';


//no return needed because ( ) after the function
const Input =(props)=>(  
    <div className="input">{props.input}</div>

)

export default Input;