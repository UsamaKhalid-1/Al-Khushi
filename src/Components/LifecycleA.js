import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Usama'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    
     componentDidMount() {
        console.log('lifecycleA componentDidMoount')
     }

     shouldComponentUpdate(){
      console.log('lifecycleA shouldComponentUpdate')
      return true
     }

     getSnapshotBeforeUpdate(preProps, preState){
      console.log('lifecycleA getSnapshotBeforeUpdate')
      return null
     }
     componentDidUpdate() {
      console.log('lifecycleA componentDidUpdate')
     }
     
      changeState = () =>{
        this.setState ({
          name: 'Codevolution'
        })
      } 
  render() {
    console.log('lifecycleA render')
    return (
     <div>
    <div>Lifecycle A</div>
    <button onClick={this.changeState}>Change state</button>
    <LifecycleB></LifecycleB>
    </div>
    )
  }
}

export default LifecycleA;
