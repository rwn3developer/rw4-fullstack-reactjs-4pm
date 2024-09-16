import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
 const navigate = useNavigate();
 const location = useLocation();
 //record fetch by navigate

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
 const [record, setRecord] = useState(
   JSON.parse(localStorage.getItem("users")) || []
 );


  useEffect(()=>{
     setName(location?.state?.name)
     setPhone(location?.state?.phone);
  },[location?.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    // let obj = {
    //   name: name,
    //   phone: phone,
    // };

    let up = record.map((val)=>{
      if(val.userid == location?.state?.userid){
         val.name = name,
         val.phone = phone
      }
      return val;
    })
    localStorage.setItem('users',JSON.stringify(up));
    alert("record update");
    navigate('/');
  
  };

  return (
    <div align="center">
      <h2>Edit User</h2>
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
            <td></td>
            <td>
              <input type="submit" value="Edit" />
            </td>
          </tr>
        </table>
      </form>
      <Link to={`/`}>view</Link>
    </div>
  );
};

export default Edit;
