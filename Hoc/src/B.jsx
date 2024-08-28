import React from 'react'
import Hoc from './Hoc'

const B = ({no,Increment}) => {
  return (
    <div align="center">
        <h2>B Component</h2>
        <h3>Count :- {no}</h3>
        <button onClick={ () => Increment() }>+</button>
    </div>
  )
}

export default Hoc(B);

