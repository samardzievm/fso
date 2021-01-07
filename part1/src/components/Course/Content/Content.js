import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({content}) => {

    let sum = content.parts.reduce((a,b) => {
        return {exercises: a.exercises + b.exercises}
    })
    let total = sum.exercises
    
    return (
        <div>
            {content.parts.map((part) =>
                <Part key={part.id} part={part} />
            )}
            <Total total={total} />
        </div>
    )
}

export default Content