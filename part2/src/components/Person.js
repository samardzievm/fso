import React from "react";
import Name from './Name'
import Phone from './Phone'

const Person = ({name, phone}) => {
    return (
        <div>
            <p><Name name={name} /> <Phone phone={phone} /> </p>
        </div>
    )
} 

export default Person