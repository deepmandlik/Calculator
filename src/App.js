import React, { Component } from 'react';
import './App.css';
import Keypad from './components/keypad';
import Output from './components/output';
import { render } from 'react-dom';

class App extends Component {
  state = { 
    result:''
   }
  buttonPressed = buttonName =>{
    if(buttonName === '='){
      this.calculate();
    }else
    this.setState({
      result:this.state.result +  buttonName
    });
    if(buttonName === ' '){
      this.setState({
        result:''
      })
    }
    if(buttonName === '  '){
      this.setState({
        result: Math.abs(this.state.result + buttonName)
      })
    }
  };
  calculate = () =>{
    try {
      this.setState({
      result:eval(this.state.result)
    });
  } catch (e) {
    this.setState({
      result:'error'
    });
  }
  };
  render() { 
    return ( 
      <div>
        <Output result={this.state.result}/>
        <Keypad buttonPressed={this.buttonPressed}/>
      </div>
     );
  }
}
 
export default App;


