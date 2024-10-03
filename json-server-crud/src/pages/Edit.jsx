import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
    }, [location?.state])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await fetch(`http://localhost:8000/users/${location?.state?.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: name,
                    phone: phone
                })
            })
            let res = await data.json();
            if (res) {
                alert("record update");
                navigate('/');
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    return (
        <div align="center">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Edit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Edit