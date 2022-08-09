import React, { Component } from 'react'

 class ErrorHandling extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           hasError:true
        }
      }
        static getDrivedStateFromError(error){
         return {
            hasError: false
         }
        }
        render(){
      if(this.state.hasError){
        return <h1>We have an error to solved</h1>
      }
      return this.props.children

      }
}

export default ErrorHandling