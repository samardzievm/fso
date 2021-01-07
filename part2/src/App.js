import React, { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      content: newName,
      date: new Date().toISOString(),
      //important: Math.random() > 0.5,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  /*
  const namesToShow = showAll
    ? persons
    : persons.filter(note => note.id) // may need a change
  */

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map((name, i) => 
        <Name key={i} name={name} />
      )}

    </div>
  )
}

export default App