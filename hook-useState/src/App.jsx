import { useState } from "react"

function App() {

  const [color, setColor] = useState(["red", "green", "blue", "pink", "brown", "orange", "purple"])
  const [loding,setLoding] = useState(false)


  

  return (
    <div>

      {
          loding ? (
            color.map((val) => {
              return (
                <h1 style={{backgroundColor:val}}>{val}</h1>
              )
            })
          ) : (
            color.map((val) => {
              return (
                <h1>{val}</h1>
              )
            })
          )
      }

      <button onClick={() => setLoding(!loding)}>Click</button>
    </div>
  )
}

export default App
