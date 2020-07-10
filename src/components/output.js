import React, { Component } from 'react';
import './output.css';

class Output extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="result mb-3 mt-3">
            {this.props.result}
            </div>
           
         );
    }
}
 
export default Output;