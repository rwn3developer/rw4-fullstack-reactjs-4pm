import { useState } from "react"

const Counter = ({cnt,inc,dec}) => {

  return (
    <div align="center">
        <h1>Counter App</h1>
        <h2>Count :- {cnt}</h2>
        <input type="button" onClick={ () => inc() } value="+"/>
        {
            cnt==0 ? (
                <input type="button" disabled onClick={ () => dec() } value="-"/>
            ) : (
                <input type="button" onClick={ () => dec() } value="-"/>
            )
        }
    </div>
  )
}

export default Counter
