import React from "react";
import Name from './Name'
import Phone from './Phone'


const Person = ({id, name, phone, handleDelete}) => {
    return (
        <div>
            <p>
                <Name name={name} /> <Phone phone={phone} /> 
                <button onClick={() => handleDelete(id)}> Delete</button>
            </p>
        </div>
    )
} 

export default Person