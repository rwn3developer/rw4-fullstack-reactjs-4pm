import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Todo = () => {

    const [todos, setTodos] = useState([]);

    const getRecord = async () => {
        try {
            let { data } = await axios.get(`https://dummyjson.com/todos`);
            setTodos(data.todos);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getRecord();
    }, [])

    return (
        <div align="center">
            <h2>Api Calling Axios Method</h2>
            {
                todos.map((val, i) => {
                    return (
                        <h2>{++i}. {val.todo}</h2>
                    )
                })
            }

        </div>
    )
}

export default Todo