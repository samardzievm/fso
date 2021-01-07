import React, { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }

    const allNames = persons.map(person => person.name)

    // check if the same name already exists
    if(allNames.includes(newName)){
      alert(`${newName} is already been added`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map((person) => 
        <Name key={person.name} name={person.name} />
      )}

    </div>
  )
}

export default App