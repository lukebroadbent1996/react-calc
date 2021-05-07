import './App.css';
import React from 'react';
import Button from './components/Keypad'
import Input from './components/Input'
import * as math from 'mathjs';

class App extends React.Component{
state={
  result:""
  
}
//function to delete the last inputted character
 handleBack=()=>{
   this.setState({result: this.state.result.slice(0, -1)})
 }

//function to add stuff to the calculator screen
insertItems = (val)=>{
  this.setState({ result: this.state.result + val})
}

//function for the equal
handleEqual =()=>{
  this.setState({ result: math.evaluate(this.state.result)})
}

  render(){
    return(
      <div className="calc-body">
        <div className="calc-wrap">
        <div className="header"><h1>React Calculator</h1></div>
          <div>
            <Input input={this.state.result}/> 
          </div>
          <div className="calc-row">
            <ClearButn handleClear={()=> this.setState({result: "" })}>CE</ClearButn>
            <Backspace back={this.handleBack}>⌫</Backspace>
          </div>
          <div className="calc-row">
            <Button handleClick={this.insertItems}>8</Button>
            <Button handleClick={this.insertItems}>9</Button>
            <Button handleClick={this.insertItems}>7</Button>
            <Button handleClick={this.insertItems}>/</Button>
          </div>
          <div className="calc-row">
            <Button handleClick={this.insertItems}>4</Button>
            <Button handleClick={this.insertItems}>5</Button>
            <Button handleClick={this.insertItems}>6</Button>
            <Button handleClick={this.insertItems}>*</Button>
          </div>
          <div className="calc-row">
            <Button handleClick={this.insertItems}>1</Button>
            <Button handleClick={this.insertItems}>2</Button>
            <Button handleClick={this.insertItems}>3</Button>
            <Button handleClick={this.insertItems}>+</Button>
          </div>
          <div className="calc-row">
            <Button handleClick={this.insertItems}>.</Button>
            <Button handleClick={this.insertItems}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.insertItems}>-</Button>
          </div>

        </div>
     </div>
    )
  }
}

// added the clear function straight in to the ClearButn up in the code^^ {()=> this.setState({result: "" }
const ClearButn =(props)=>(  
  <div className="clear" onClick={props.handleClear}>{props.children}</div>

)

const Backspace =(props)=>(
  <div className="back" onClick={props.back}>{props.children}</div>
)

// const Input =(props)=>(  
//   <div className="input">{props.input}</div>

// )

export default App; 
