import { useState } from "react"
import Counter from "./component/Counter"

function App() {

  const [no,setNo] = useState(0)

  const Increment = () => {
    setNo(no+1)
  }

  const Decrement = () => {
      setNo(no-1)
  }

  return (
      <Counter
          cnt={no}
          inc={Increment}
          dec={Decrement}
      />
  )
}

export default App
