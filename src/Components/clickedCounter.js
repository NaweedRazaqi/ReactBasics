

import { click } from '@testing-library/user-event/dist/click'
import React, { Component } from 'react'
import withCounter from './withCounter'
 class clickedCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Count:0
        }
      }
      increamentCount = () =>{
     this.setState(prevState =>{
      return {Count: prevState.Count + 1 }
     })
      }
  render() {
    const {Count} = this.state 
    return (
     
        <button onClick={this.increamentCount}>{this.props.name} Clicked {Count} Times</button>
      
    )
  }
}

export default withCounter(clickedCounter)