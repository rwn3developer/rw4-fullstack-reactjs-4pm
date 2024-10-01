import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await fetch(`http://localhost:8000/users`, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    phone: phone
                })
            })
            let res = await data.json();
            if (res) {
                alert("record add");
                navigate('/');
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    return (
        <div align="center">
            <h2>Add User</h2>
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
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Add