import React, { Component } from 'react'

 class GreetingNewUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin: true
      }
    }
  render() {
   


    // short circuit approach return only one way if the condition is true 
    // it will return the value else it will not show anything.
    return  this.state.isloggedin && <div>Welcome New User</div>



     // use ternary operator approach which is very populer
    //return this.state.isloggedin ? <div>Welcome new User</div> : <div>Welcome Guest user</div>


    // Element variable Approach
    // let message

    // if(this.state.isloggedin){
    //     message= <div>Welcome New User</div>
    // }
    // else{
    //     message= <div>Welcome Guest user</div>
    // }
    // return<div>{message}</div>

    // if Else Approach
    // if(this.state.isloggedin){
    //     return <div>Welcome New User</div>
    // }
    // else{
    //     return <div>Welcome Guest User</div>
    // }
   
  }
}

export default GreetingNewUser