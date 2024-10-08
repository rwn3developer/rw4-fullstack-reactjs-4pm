import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

function App() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app)
    let id = Math.floor(Math.random() * 100000);
    set(ref(db, `users/${id}`), {
      name: name,
      phone: phone
    })
    alert("record add");
    setName("");
    setPhone("");
  }
  return (
    <div align="center">
      <h2>Add Record</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
        <label htmlFor="phone">Phone Number:</label><br />
        <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br /><br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  )
}
export default App
