import { useState } from "react"

function App() {

  const [input, setInput] = useState([{ id: Math.random(), name: '', phone: '' }]);

  const [disable, setDisable] = useState([]);

  const addMore = () => {
    let newfield = { id: Math.random(), name: '', phone: '' };
    setInput([...input, newfield]);
  }

  const removeBtn = (id) => {
    let deleteData = input.filter(val => val.id !== id);
    setInput(deleteData);
  }

  const doneBtn = (id) => {
    if (!disable.includes(id)) {
      setDisable([...disable, id]);
    }
  }

  const editBtn = (id) => {
    setDisable(disable.filter(disableId => disableId !== id));
  }

  return (
    <div align="center">
      <h2>Dynamic Form</h2>

      {
        input.map((val) => (
          <div key={val.id}>
            <div>
              {
                disable.includes(val.id) ? (
                  <>
                    Name: <input type="text" value={val.name} disabled /> &nbsp;
                    Phone: <input type="text" value={val.phone} disabled /> &nbsp;
                    <button onClick={() => editBtn(val.id)}>Edit</button>
                  </>
                ) : (
                  <>
                    Name: <input type="text" value={val.name} onChange={(e) => {
                      const updatedInputs = input.map((item) =>
                        item.id === val.id ? { ...item, name: e.target.value } : item
                      );
                      setInput(updatedInputs);
                    }} /> &nbsp;
                    Phone: <input type="text" value={val.phone} onChange={(e) => {
                      const updatedInputs = input.map((item) =>
                        item.id === val.id ? { ...item, phone: e.target.value } : item
                      );
                      setInput(updatedInputs);
                    }} /> &nbsp;
                    <button onClick={() => doneBtn(val.id)}>Done</button>
                    <button onClick={() => removeBtn(val.id)}>Remove</button>
                  </>
                )
              }
            </div>
            <br />
          </div>
        ))
      }
      <button onClick={addMore}>Add</button>
    </div>
  );
}

export default App;
