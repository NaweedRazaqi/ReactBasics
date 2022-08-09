


import React, { Component } from 'react'

 class ClickedFunction extends Component {

    clickhandler(){
        console.log("button clicked");
    }
  render() {
    return (

      <button onClick={this.clickhandler()}>clickhundler</button>
    )
  }
}

export default ClickedFunction

// import React from 'react'

// function ClickedFunction() {

//     function clickHundler(){
//         console.log("button clicked!")
//     }
//   return (
//     <button onClick={clickHundler}>ClickedFunction</button>
//   )
// }

//export default ClickedFunction