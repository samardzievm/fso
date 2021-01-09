import React from "react";
import Name from './Name'
import Phone from './Phone'


const Person = ({ person, removePerson }) => {
    return (
        <div>
            <Name name={person.name} /> 
            <Phone phone={person.number} /> 
            <button onClick={() => removePerson(person.id)}> Delete</button>
        </div>
    )
} 

export default Person