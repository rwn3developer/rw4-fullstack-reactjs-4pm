import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()

    const logout = async () => {
        try {
            await signOut(auth);
            alert("logot succesdfully")
            navigate('/')
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div align="center">
            <h2>Dashboard</h2>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Dashboard