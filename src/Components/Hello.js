import React from "react";

const Hello = props =>{
    console.log(props)
    return (
        <div className="DummyClass">
           <p>Hello {props.name} {props.classHero}</p>

           {props.children}
        </div>
    )
}

export default Hello