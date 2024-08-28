import React from 'react'
import Hoc from './Hoc'


const A = ({no,Increment,Decrement}) => {
    return (
        <div align="center">
            <h2>A Component</h2>
            <h3>Count :- {no}</h3>
            <button onClick={ () => Increment() }>+</button>
            <button onClick={ () => Decrement() }>-</button>
        </div>
    )
}

export default Hoc(A); 
