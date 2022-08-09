

import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
    
  render() {
    const {count,buttonClickHanlder} = this.props
    return (
     <h2 onMouseOver={buttonClickHanlder}>Mouse Hover {count} Times</h2>
    )
  }
}

export default HoverCounterTwo