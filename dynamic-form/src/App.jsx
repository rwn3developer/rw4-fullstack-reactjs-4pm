import { useState } from "react"

function App() {

  const [input, setInput] = useState([
    {id : '', name: '', phone: '' },
  ])

  const addMore = () => {
    let newfield = { id : Math.floor(Math.random()*10000) , name: '', phone: '' };
    setInput([...input, newfield]);
  }
  const removeBtn = (id) => {
    let deleteData = input.filter(val => val.id != id);
    setInput(deleteData);
  }

  return (
    <div align="center">
      <h2>Dynamic Form</h2>

      {
        input.map((val,index) => {
          return (
            <div key={val.id}>
              <div>
                Name : <input type="text" /> &nbsp;
                Phone : <input type="no" /> &nbsp;
                {
                    index != 0 ? (
                      <button onClick={ () => removeBtn(val.id) }>remove</button>
                    ) : (
                      ""
                    )
                }
                
              </div>
              <br></br>
            </div>
          )
        })
      }
      <button onClick={() => addMore()}>Add</button>

    </div>
  )
}

export default App
