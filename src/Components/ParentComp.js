import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Usama'
      }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Usama'
            })
        }, 2000)
    }
    
  render() {
    console.log('************Parent Comp Render***************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/*<RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>*/}
      </div>
    )
  }
}

export default ParentComp
