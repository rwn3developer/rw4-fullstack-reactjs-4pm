import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || [])
  const [course, setCourse] = useState([])



  const handleCourseChange = (checked, c) => {
    let all = [...course];
    if (checked) {
      all.push(c);
    } else {
      all = all.filter(val => val != c)
    }
    setCourse(all)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      userid: Math.floor(Math.random() * 10000),
      name: name,
      phone: phone,
      course: course,
      status: "deactive"
    }



    let newfield = [...record, obj];
    setRecord(newfield);
    localStorage.setItem("users", JSON.stringify(newfield));
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
            <td>Name :- </td>
            <td>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </td>
          </tr>
          <tr>
            <td>Phone :- </td>
            <td>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </td>
          </tr>
          <tr>
            <td>Course :- </td>
            <td>
              {
                ["html", "css", "bootstrap", "js", "reactjs", "nodejs", "photoshop", "illustrator"].map((c) => {
                  return (
                    <label>
                      <input type="checkbox" onChange={(e) => handleCourseChange(e.target.checked, c)} />{c}
                    </label>
                  )
                })
              }
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" />
            </td>
          </tr>
        </table>
      </form>
      <Link to={`/`}>view</Link>
    </div>
  );
}

export default Add
