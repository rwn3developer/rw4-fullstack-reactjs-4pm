import { useCounter } from "./context/CounterContext"

function App() {

  const { no, Increment, Decrement } = useCounter();


  return (
    <>
      <div align="center">
        <h2>Context hook</h2>
        <h3>Count :- {no}</h3>
        <button onClick={() => Increment()}>+</button>
        <button onClick={() => Decrement()}>-</button>
      </div>
    </>
  )
}

export default App
