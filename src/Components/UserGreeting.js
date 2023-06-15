import React, { Component } from 'react'

class UserGreeting extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isloggedIn: true
     }
   }
    
   render(){
    return(
        this.state.isloggedIn ?
        <div>Hello</div> :
        <div>Bye</div>
    )
    
    
    
    
   {/*et message  
    if(this.state.isloggedIn)
      { message= <div >Hello Everdybody!</div> }
      else { message=<div>Hello Khaan</div>}
   return <div>{message}</div> */}


 {/* render() {
    if (this.state.isloggedIn){
        return(
         <div>Hello Everybody!</div>
        )
        
    }
    else {
        return(
            <div>Hello Khan</div>
        )
    } */}
    {/*return (
      <div>
        <div>Hello Everybody!</div>
        <div>Hello Khan</div>
      </div>
    )*/}
  }
}

export default UserGreeting;

