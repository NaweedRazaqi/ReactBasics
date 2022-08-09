

// implementation of HOR or Higher Order Component


import React from "react";


const updatetComponent = orginalComponent => {
    class newComponent extends React.Component{
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
        render(){
            return <orginalComponent Count = {this.state.Count} increamentCount = {this.increamentCount}/>
        }
    }
    return newComponent
}

export default updatetComponent