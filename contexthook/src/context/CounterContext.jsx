import { createContext, useContext, useState } from "react";

const CounterContext = createContext();


const Counter = ({ children }) => {

    const [no, setNo] = useState(5);

    const Increment = () => {
        setNo(no + 1)
    }

    const Decrement = () => {
        setNo(no - 1)
    }

    return (
        <CounterContext.Provider value={{ no, Increment, Decrement }}>
            {children}
        </CounterContext.Provider>
    )

}

//custom hook
const useCounter = () => {
    return useContext(CounterContext);
}

export { Counter, useCounter }

