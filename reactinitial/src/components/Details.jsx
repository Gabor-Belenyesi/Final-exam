import React from 'react'

function Details({person}) {
    console.log(person)
    return (
        <>
            <div>{person.details}</div>

        </>
    )
}

export default Details