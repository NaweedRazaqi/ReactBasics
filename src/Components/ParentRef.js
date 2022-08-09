
import React, { Component } from 'react'
import Input from './Input'

 class ParentRef extends Component {
    constructor(props) {
      super(props)
    
     this.componentRef = React.createRef()
    }
    clickHundler =() =>{
     this.componentRef.current.focusInput()
    }
  render() {
    return (
    <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHundler}>focus input</button>
    </div>
    )
  }
}

export default ParentRef