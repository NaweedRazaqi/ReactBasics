
import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

 class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Kareem'
      }

    }
    componentDidMount(){
   setInterval(() => {
      this.setState({
        name:'Kareem'
      })
   }, 2000);
    }
  render() {
    console.log('parent component render')
    return (
        <div>
      <div>ParentComp</div>
      
      {/* <PureComp name={this.state.name}></PureComp>
      <RegularComp name={this.state.name}></RegularComp> */}
      <MemoComponent></MemoComponent>
      </div>
    )
  }
}

export default ParentComp