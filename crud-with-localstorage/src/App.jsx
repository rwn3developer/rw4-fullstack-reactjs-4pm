import { useState } from "react"

function App() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");


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

  const handleDelete = (id) => {
      let d = record.filter(val => val.userid != id);
      setRecord(d);
      localStorage.setItem('users',JSON.stringify(d));
      alert("record delete  ")
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
      </form><br></br><br></br>
      <table border={1}>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Phone</th>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                {
                  record.map((val,index)=>{
                    const {userid,name,phone} = val;
                    return (
                      <tr>
                        <td>{index+1}</td>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>
                          <button onClick={ () => handleDelete(userid) }><i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
      </table>
    </div>
  )
}

export default App
