import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState([]);
    // const [cont, setCont] = useState([]);

    const getRecord = async () => {
        try {
            let data = await fetch(`http://localhost:8000/users`, {
                method: "GET"
            });
            let res = await data.json();
            setRecord(res)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    // const getCountry = async () => {
    //     try {
    //         let data = await fetch(`http://localhost:8000/country`);
    //         let res = await data.json();
    //         setCont(res)
    //     } catch (err) {
    //         console.log(err);
    //         return false;
    //     }
    // }

    useEffect(() => {
        getRecord();
        // getCountry()
    }, [])

    const userDelete = async (id) => {
        try {
            let data = await fetch(`http://localhost:8000/users/${id}`, {
                method: "DELETE"
            });
            let res = await data.json();
            if (res) {
                alert("user delete");
                getRecord();
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div align="center">
            <h2>Json Server</h2>
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
                        record.map((r, i) => {
                            const { id, name, phone } = r;
                            return (
                                <tr key={id}>
                                    <td>{++i}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={() => userDelete(id)}>Delete</button>&nbsp;
                                        <button onClick={() => navigate(`/edit`, { state: r })}>Edit</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <h2>Country</h2> */}
            {/* <table border={1}>
                <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cont.map((c, i) => {
                            const { id, name } = c;
                            return (
                                <tr key={id}>
                                    <td>{++i}</td>
                                    <td>{name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
            <Link to={`/add`}>Add</Link>&nbsp;
            <Link to={`/dynamic`}>Dynamic</Link>
        </div>
    )
}
export default View;