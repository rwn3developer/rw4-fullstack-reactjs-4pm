import { useState } from "react"

function App() {
  const [login,setLogin] = useState(false)


  // const handleSubmit = (res) => {
  //     setLogin(res)
  // }

return (
      <div align="center">
        <h2>Simple Login</h2>
          {
            login ? (
                <div>
                  <h2 style={{color:"green"}}>Successfully Login</h2>
                   <button onClick={ () => setLogin(!login) }>Logout</button>
                </div>
            ) : (
              <div>
                <h2 style={{color:"blue"}}>Please Login Here</h2>
                <button onClick={ () => setLogin(!login) }>Login</button>
              </div> 
            )
          }
      </div>
  )
}
export default App
