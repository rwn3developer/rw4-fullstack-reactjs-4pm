import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="col-lg-8">
                    <div className="card">
                        <h5 className="card-header">User Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={`/register`}>
                                    <button type="submit" className="btn btn-success mx-5">Register</button>
                                </Link>

                            </form>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Login