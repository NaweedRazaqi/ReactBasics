
import React from 'react'

export default function Person({persons}) {
  return (
    <div><h2> I am {persons.name}, 
    I know {persons.skills}</h2></div>
  )
}
