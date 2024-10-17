import React from 'react'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'

const Users = () => {
    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className='col-lg-9'>
                        <h2>Users</h2>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Users