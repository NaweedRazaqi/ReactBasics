
import React from 'react'

function Hero({heroName}) {
    if(heroName === "joker"){
        throw new Error('Not A hero')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero