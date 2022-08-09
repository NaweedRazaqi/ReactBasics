

import React, { Component } from 'react'

 class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      this.clickHundler = this.clickHundler.bind(this)
    }
    clickHundler(){
        this.setState({
            message:'Goodbye!'
        })
    }
  render() {
    
    return (
        <div>
      <div>{this.state.message}</div>
      <button onClick={this.clickHundler}>click!!</button>
      </div>
    )
  }
}

export default EventBinding