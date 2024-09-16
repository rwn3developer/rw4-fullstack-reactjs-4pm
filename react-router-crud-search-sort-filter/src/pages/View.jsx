import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const View = () => {

  const [sort,setSort] = useState("");
  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState([])

const navigate = useNavigate();

 const [record, setRecord] = useState(
   JSON.parse(localStorage.getItem("users")) || []
 );

 useEffect(()=>{
    if(sort != ""){
      if(sort == "asc"){
          setFilter([...record].sort((a, b) => a.name.localeCompare(b.name))); 
      }else if("dsc"){
        setFilter([...record].sort((a, b) => b.name.localeCompare(a.name)));
      } else{
        setFilter([...record]);
      }
    } 

    if(search != ""){
      const filtered = record.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
      setFilter(filtered);
    }
 },[sort,search])



  return (
    <div align="center">
      <h2>View User</h2>
      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="">Select Sort</option>
        <option value="asc">A-Z</option>
        <option value="dsc">Z-A</option>
      </select>
      <br></br>
      <br></br>
      <input type='text' onChange={ (e) => setSearch(e.target.value) }  value={search}/>
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
          {filter.length === 0 ? (
            <>
              {record.map((val) => {
                const { userid, name, phone } = val;
                return (
                  <tr key={userid}>
                    <td>{userid}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>
                      <button onClick={() => navigate(`/edit`, { state: val })}>
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              {filter.map((val) => {
                const { userid, name, phone } = val;
                return (
                  <tr key={userid}>
                    <td>{userid}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>
                      <button onClick={() => navigate(`/edit`, { state: val })}>
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
      <Link to={`/add`}>Add</Link>
    </div>
  );
}

export default View
