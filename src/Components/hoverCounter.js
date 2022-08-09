
import React, { Component } from 'react'
import withCounter from './withCounter'
 class hoverCounter extends Component {
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
    // const {Count , increamentCount} = this.props
    const {Count} = this.state 
    return (
      
        <h2 onMouseOver={this.increamentCount}> {this.props.name} On Mouse Hover {Count} Times </h2>
      
    )
  }
}

export default withCounter (hoverCounter)