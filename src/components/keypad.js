import React, { Component } from 'react';
import './keypad.css';

class Keypad extends Component {
    state = { 
        pi:Math.PI,
        e:Math.E
     }
    buttonPressed = (e) =>{
        this.props.buttonPressed(e.target.name);
    }
    render() { 
        return ( 
            <div className="cont">
                <div class="d-flex justify-content-between mb-3">
                    <button className="btn btn-light btnl mr-3" name="(" onClick={this.buttonPressed}>(</button>
                    <button className="btn btn-light btnl mr-3" name=")" onClick={this.buttonPressed}>)</button>
                    <button className="btn btn-light btnl mr-3" name="/100" onClick={this.buttonPressed}>%</button>
                    <button className="btn btn-light btnl" name=" " onClick={this.buttonPressed}>CE</button>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <button className="btn btn-light btnl mr-3" name="  " onClick={this.buttonPressed}>|x|</button>
                    <button className="btn btn-light btnl mr-3" name={this.state.e} onClick={this.buttonPressed}>e</button>
                    <button className="btn btn-light btnl mr-3" name={this.state.pi} onClick={this.buttonPressed}>π</button>
                    <button className="btn btn-light btnl" name="+" onClick={this.buttonPressed}>+</button>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <button className="btn btn-light btnl mr-3" name="7" onClick={this.buttonPressed}>7</button>
                    <button className="btn btn-light btnl mr-3" name="8" onClick={this.buttonPressed}>8</button>
                    <button className="btn btn-light btnl mr-3" name="9" onClick={this.buttonPressed}>9</button>
                    <button className="btn btn-light btnl" name="-" onClick={this.buttonPressed}>-</button>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <button className="btn btn-light btnl mr-3" name="4" onClick={this.buttonPressed}>4</button>
                    <button className="btn btn-light btnl mr-3" name="5" onClick={this.buttonPressed}>5</button>
                    <button className="btn btn-light btnl mr-3" name="6" onClick={this.buttonPressed}>6</button>
                    <button className="btn btn-light btnl" name="*" onClick={this.buttonPressed}>x</button>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <button className="btn btn-light btnl mr-3" name="1" onClick={this.buttonPressed}>1</button>
                    <button className="btn btn-light btnl mr-3" name="2" onClick={this.buttonPressed}>2</button>
                    <button className="btn btn-light btnl mr-3" name="3" onClick={this.buttonPressed}>3</button>
                    <button className="btn btn-light btnl" name="/" onClick={this.buttonPressed}>/</button>
                </div>
                <div className="d-flex justify-content-between">
                <div class="d-flex justify-content-between mb-3 w">
                    <button className="btn btn-light btnl mr-3" name="." onClick={this.buttonPressed}>.</button>
                    <button className="btn btn-light btnl mr-3" name="0" onClick={this.buttonPressed}>0</button>
                    
                </div>
                <div className="w"><button className="btn btn-primary btnl" name="=" onClick={this.buttonPressed}>=</button></div>
                </div>
            </div>
      
         );
    }
}
 
export default Keypad;