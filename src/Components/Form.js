import React, { Component } from 'react'

class Form extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        username: '',
        comments: '',
        topic: ''
     }
   }
   handleUsernamChange = event => {
    this.setState({
        username: event.target.value
    })
      }

      handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
          }  
          handleTopicChange = event => {
            this.setState({
                topic: event.target.value
            })
              } 
         handlesubmit = event => {
            alert (`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            event.preventDefault(true)
         }
  render() {
    //const {username, comments, topic} = this.state
    return (
     <form onSubmit={this.handlesubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username}
             onChange={this.handleUsernamChange}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments}
            onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label> Topic </label>
            <select value={this.state.topic}
            onChange={this.handleTopicChange}
            >
               <option value="react">React</option>
                <option value="anguler">Anguler</option>
                <option value="python">Python</option>
            </select>
        
        </div>
        <button type="submit">Submit</button>
     </form>
    );
  }
}

export default Form;
