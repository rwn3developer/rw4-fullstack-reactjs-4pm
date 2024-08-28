import React, { useState } from 'react'

const Hoc = (WrappedComponent) => {

    return () => {
        const [no,setNo] = useState(0);

        const Increment = () => {
          setNo(no + 1);
        }
        const Decrement = () => {
          setNo(no - 1);
        }

        return (
          <WrappedComponent 
            no={no} 
            Increment={Increment} 
            Decrement={Decrement}>

          </WrappedComponent>
        )
    }  
}

export default Hoc
