import React, { useState, useEffect  } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ successMessage, setSuccessMessage] = useState(null) 
  useEffect(() => {
    console.log('effect')
    
    personService
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }


    const allNames = persons.map(person => person.name)

    // check if the same name already exists
    if(allNames.includes(newName)){
      alert(`${newName} is already been added`)
      return // very important!!!
    }
    // add to the database
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          setSuccessMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        })
      }
  }

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      personService.deletePerson(id).then(() => {
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);
      });
    }
  };
  
  

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
      
      <h2 className="phonebook">Phonebook</h2>
      
      <form onSubmit={addPerson}>
        
        <div>
          <PersonForm text={"Name "} value={newName} onChange={handleNameChange}/>
          <PersonForm text={"Number "} value={newPhone} onChange={handlePhoneChange}/>
        </div>

        <div>
          <button type="submit" >add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Notification message={successMessage} />
      <Persons persons={persons} removePerson={removePerson} />

    </div>
  )
}

export default App
