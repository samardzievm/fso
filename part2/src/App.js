import React, { useState, useEffect  } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }

    const allNames = persons.map(person => person.name)

    // check if the same name already exists
    if(allNames.includes(newName)){
      alert(`${newName} is already been added`)
      return // very important!!!
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      
      <h2>Phonebook</h2>
      
      <form onSubmit={addPerson}>
        
        <div>
          <PersonForm text={"Name "} value={newName} onChange={handleNameChange}/>
          <PersonForm text={"Number "} value={newPhone} onChange={handlePhoneChange}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      {persons.map((person) => 
        <Person key={person.id} name={person.name} phone={person.number} />
      )}

    </div>
  )
}

export default App