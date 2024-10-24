import React, { useEffect } from 'react'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Dashboard = () => {

    const [auth, setAuth] = useAuth();

    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className='col-lg-9'>
                        <h2>Dashboard</h2>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard