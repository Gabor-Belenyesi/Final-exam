import React from 'react'
import Character from './Character'


function Characters({ persons }) {
  return (
    <>
    <div>{persons.map((person, i) => <Character key={i} person={person} />)}</div>
    </>
  )
}

export default Characters