import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const View = () => {

  const navigate = useNavigate();

 const [record, setRecord] = useState(
   JSON.parse(localStorage.getItem("users")) || []
 );
 

  return (
    <div align="center">
      <h2>View User</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
               record.map((val)=>{
                const {userid,name,phone} = val;
                 return (
                   <tr key={userid}>
                     <td>{userid}</td>
                     <td>{name}</td>
                     <td>{phone}</td>
                     <td>
                        <button onClick={ () => navigate(`/edit`,{state : val}) }>Edit</button>
                     </td>
                   </tr>
                 );
               })
          }
        </tbody>
      </table>
      <Link to={`/add`}>Add</Link>
    </div>
  );
}

export default View
