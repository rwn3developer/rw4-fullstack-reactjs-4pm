import { useDispatch, useSelector } from "react-redux"

import { Decrement, Increment, Reset } from "./action/counterAction";

function App() {

  const no = useSelector(state => state.cnt);
  const dispatch = useDispatch();

  return (
    <div align="center">
      <h1>Counter App</h1>
      <h2>Count :- {no}</h2>
      <button onClick={() => dispatch(Increment())}>+</button>
      {
        no === 0 ? (
          <>
            <button disabled onClick={() => dispatch(Decrement())}>-</button>
            <button disabled onClick={() => dispatch(Reset())}>R</button>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(Decrement())}>-</button>
            <button onClick={() => dispatch(Reset())}>R</button>
          </>
        )
      }


    </div>
  )
}

export default App
