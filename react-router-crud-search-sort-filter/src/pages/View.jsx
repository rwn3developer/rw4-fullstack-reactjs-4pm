import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const View = () => {

  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [filter, setFilter] = useState([])

  const navigate = useNavigate();

  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    let updatedRecords = [...record];

    // Apply filtering first
    if (search !== "") {
      updatedRecords = updatedRecords.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    if (sort === "asc") {
      updatedRecords.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "dsc") {
      updatedRecords.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (status == "active") {
      updatedRecords = updatedRecords.filter((item) => item.status === "active")
    } else if (status == "deactive") {
      updatedRecords = updatedRecords.filter((item) => item.status === "deactive")
    }

    // Update the filter state with the sorted and filtered records
    setFilter(updatedRecords);
  }, [sort, search, status]);



  const statusChange = (st, id) => {
    if (st == "deactive") {
      let up = record.map((val) => {
        if (val.userid == id) {
          val.status = "active"
        }
        return val;
      })
      localStorage.setItem('users', JSON.stringify(up))
      setRecord(up);
    } else {
      let up = record.map((val) => {
        if (val.userid == id) {
          val.status = "deactive"
        }
        return val;
      })
      localStorage.setItem("users", JSON.stringify(up));
      setRecord(up);
    }
  }

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
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <br></br>
      <br></br>

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
      <br></br>
      <br></br>

      <table border={1}>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filter.length === 0 ? (
            <>
              {record.map((val) => {
                const { userid, name, phone, course, status } = val;
                return (
                  <tr key={userid}>
                    <td>{userid}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{course}</td>
                    {status == "active" ? (
                      <td
                        onClick={() => statusChange(status, userid)}
                        style={{ color: "green" }}
                      >
                        {status}
                      </td>
                    ) : (
                      <td
                        onClick={() => statusChange(status, userid)}
                        style={{ color: "red" }}
                      >
                        {status}
                      </td>
                    )}

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
                const { userid, name, phone, course, status } = val;
                return (
                  <tr key={userid}>
                    <td>{userid}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{course.join(" , ")}</td>
                    {status == "active" ? (
                      <td
                        onClick={() => statusChange(status, userid)}
                        style={{ color: "green" }}
                      >
                        {status}
                      </td>
                    ) : (
                      <td
                        onClick={() => statusChange(status, userid)}
                        style={{ color: "red" }}
                      >
                        {status}
                      </td>
                    )}

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


ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today ant-picker-cell-selected