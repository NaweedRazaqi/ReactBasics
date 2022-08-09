
import React from 'react'
import Person from './Person'
  function ListName() {
   // const names = ['Ali','Mohammad','Suliman','Omar']
   const persons =[
    {
        id: 1,
        name: 'Ali',
        skills:'React'
    },
    {
        id: 2,
        name: 'mohammad',
        skills:'java'
    },
    {
        id: 3,
        name: 'omar',
        skills:'anguler'
    },
    {
        id: 4,
        name: 'suliman',
        skills:'React'
    },
   ]
  return (
    <div>
      {/* <h3>{names[0]}</h3>   <h3>{names[1]}</h3>   <h3>{names[2]}</h3>   <h3>{names[3]}</h3> */}
       {/* OR */}
      {
        //persons.map(persons =>  <Person key= {persons.id} persons={persons}></Person>) OR-
          // if the list doesnt have id we use array index to unquily identify - 
          // the id for each element in the list - 
        //and the index is passed as a second parameter to the arrow => function within the map() meth
        persons.map((persons, index) =>  <Person key= {index} persons={persons}></Person>)
      }
    </div>
  )
}
  
export default ListName
