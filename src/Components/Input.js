
import React, { Component } from 'react'

 class Input extends Component {
    constructor(props) {
      super(props)
    
      this.inptRef = React.createRef()
    }
    focusInput(){
        this.inptRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inptRef}></input>
      </div>
    )
  }
}

export default Input