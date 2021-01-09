import React from 'react'
import Person from './Person'

const Persons = ({persons, removePerson}) => {
    return (
        <div>
            {persons.map((person) => 
                <Person key={person.id} person={person} removePerson={removePerson} />
            )}
        </div>
    )
}

export default Persons