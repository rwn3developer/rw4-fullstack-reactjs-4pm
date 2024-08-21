import React, { useRef } from 'react'

const UncontrolComponent = () => {

    const name = useRef("");
    const email = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        
    }

  return (
    <div align="center">
        <h1>Uncontrolled Component</h1>

        <form onSubmit={handleSubmit}>
            Name : <input type="text" ref={name} />
            email : <input type="text" ref={email} />
            <input type="submit" />
        </form>

    </div>
  )
}

export default UncontrolComponent
