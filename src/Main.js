import React from 'react'
import "./App.css"

export default function Main({toggle}) {
  return (
    <>
        <h1>Hello form context </h1>
        <button className='btn-secondary' onClick={toggle}> Show alert</button>
    </>
  )
}
