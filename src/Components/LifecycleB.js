import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Usama'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }
    
     componentDidMount() {
        console.log('lifecycleB componentDidMoount')
     }
      
     shouldComponentUpdate(){
      console.log('lifecycleB shouldComponentUpdate')
      return true
     }

     getSnapshotBeforeUpdate(preProps, preState){
      console.log('lifecycleB getSnapshotBeforeUpdate')
      return null
     }
     componentDidUpdate() {
      console.log('lifecycleB componentDidUpdate')
     }

  render() {
    console.log('lifecycleB render')
    return <div>Lifecycle B</div>
  }
}

export default LifecycleB;
