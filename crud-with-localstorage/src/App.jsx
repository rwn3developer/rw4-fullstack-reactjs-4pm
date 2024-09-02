import { useState } from "react"

function App() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  // const getRecord = () => {
    let data = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    // if(data){
    //   return JSON.parse(data);
    // }else{
    //   return [];
    // }
  //     return JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
  // }

  const [record,setRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !phone){
      alert("All field is required");
      return false;
    }

   let obj = {
      userid : Math.floor(Math.random() * 100000),
      name : name,
      phone : phone
   }

    // record.push(obj) 
    let newRecord = [...record,obj];
    setRecord(newRecord);
    localStorage.setItem("users",JSON.stringify(newRecord));
    alert("user add");
    setName("");
    setPhone("");
  
  }

  return (
    <div align="center">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
          <table border={1}>
              <tr>
                <td>Name : </td>
                <td><input type="text" onChange={ (e) => setName(e.target.value) } placeholder="Enter name" value={name}/></td>
              </tr>
              <tr>
                <td>Phone : </td>
                <td><input type="number" onChange={ (e) => setPhone(e.target.value) } placeholder="Enter phone" value={phone}/></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" />
                </td>
              </tr>
          </table>
      </form>
    </div>
  )
}

export default App
