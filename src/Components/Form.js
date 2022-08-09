
import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    onchangehundler= (event) =>{
   this.setState({
    username: event.target.value
   })
    }
    onchangecomment= (event) =>{
        this.setState({
         comments: event.target.value
        })
         }
         onChangetopic= (event) =>{
            this.setState({
             topic: event.target.value
            })
             }
    onSubmitHundler = (event)=>{
        alert(`${this.state.username} ${this.state.comments}
         ${this.state.topic}` + 'The form is submited')
         event.perventDefault()
    }
  render() {
    return (
      <form onSubmit={this.onSubmitHundler}>
         <div className='formgroup'>
            <labe>User Name</labe>
            <input type="text" value={this.state.topics} onChange={this.onchangehundler}/>
        </div>
        <div className='formgroup'>
            <labe>Comments</labe>
            <textarea type="text" value={this.state.comments} onChange={this.onchangecomment}/>
        </div>
        <div className='formgroup'>
            <labe>Topics</labe>
            <select value={this.state.topic} onChange={this.onChangetopic}>
              <option value="react">React</option>
              <option value="anguler">Anguler</option>
              <option value="node js">Node Js</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>

    )
  }
}

export default Form