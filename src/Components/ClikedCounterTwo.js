
import React, { Component } from 'react'

 class ClikedCounterTwo extends Component {
    
  render() {
    const {count,buttonClickHanlder} = this.props
    return (
      <button onClick={buttonClickHanlder}>Clicked {count} Times</button>
    )
  }
}

export default ClikedCounterTwo