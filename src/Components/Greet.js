import React, { Component } from 'react';
import { render } from 'react-dom';

class Greet extends Component  {
    
    constructor() {
        super()
        this.state = {
            message: 'Hello Usama'
        }
    }
     
     changeMessage(){
     this.setState({
        message: 'Goodbye!'
     })

    }
    render(){
    return (
    
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={() => this.changeMessage()}>Click me</button>
    </div>
  )
    }
}
export default Greet; 