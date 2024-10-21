import React, { useState } from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(`http://localhost:8000/users`, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    city: city,
                    role: "user"
                })
            })
            let res = await response.json();
            if (res) {
                toast.success("User successfully register")
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="col-lg-8">
                    <div className="card">
                        <h5 className="card-header">User Register</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                    <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={`/login`}>
                                    <button type="submit" className="btn btn-success mx-5">Login</button>
                                </Link>

                            </form>

                        </div>
                    </div>


                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register