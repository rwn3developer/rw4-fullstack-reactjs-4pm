import React, { useState } from 'react'

const ControlComponent = () => {

    const [name,setName] = useState("");
    const [record,setRecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(!name){
          alert("all field is required");
          return false;
        }

        let old = [...record,name];
        setRecord(old);
        alert("record add");
        setName("");      
       
    }

  return (
    <div align="center">
      <h1>control component</h1>
      <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Name :- </td>
                    <td><input type="text" onChange={ (e) => setName(e.target.value) } value={name}/></td> 
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit"/>
                    </td>
                </tr>
            </table>
      </form><br></br>
      <table border={1}>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val,i)=>{
              return(
                <tr>
                  <td>{++i}</td>
                  <td>{val}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ControlComponent
