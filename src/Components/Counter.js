import React, {Component} from "react"


 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increament(){

        // this.setState({    // the setSate function has two parameters 1. the state object 2. the callback function
        //     count:  this.state.count + 1 // state object
        // },
        // ()=>{
        //     console.log(this.state.count) // the callback functions
        //     }
        // )
        this.setState(prevState => ({ // whenever you want to update the state based on the prevous
                                      // state, make sure to pass a function as an argument instead
                                      // of the regular object

            count: prevState.count+1
        }))
    }
    icreamentFiv(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }
  render() {
    return (
        <div>
      <div>Counter - {this.state.count}</div>
      <button onClick={()=> this.icreamentFiv()}>increament</button>
      </div>
    )
  }
}

export default Counter