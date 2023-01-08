import React, { useState } from 'react'
import Details from './Details'



function Character({ person }) {

    const [isShown, setIsShown] = useState(false)
    const handleClick = () => {
        setIsShown(current => !current)
    }

    return (
        <>
            <div>{person.name}</div>
            <button onClick={handleClick}>{isShown ? "Show less details" : "Show more details"}</button>
            {isShown ? <Details person={person}/> : null}
        </>
    )
}

export default Character