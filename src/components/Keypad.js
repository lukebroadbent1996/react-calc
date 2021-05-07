import React from 'react';
import './Keypad.css';

//logic to figure out what an operator is
const isOp = (val) =>{
    return !isNaN(val) || val === "." || val === "="
}

// function for buttons on keypad
// added 2 classes so it can distinguish between an operator and number 
//props.children - what ever is put inside the tags becomes the props 
const Button =(props)=>(
    <div className={`keypad-style ${ isOp(props.children) ? null : "operator"}`}
    onClick={()=> props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;