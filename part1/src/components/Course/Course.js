import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'

const Course = ({course}) => {

    return (
        <div>
            <Header name={course.name} />
            <Content content={course}/>
            
        </div>
    )
}

export default Course


