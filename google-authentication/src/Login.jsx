import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider, auth } from "../firebase"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            let data = await signInWithPopup(auth, googleAuthProvider)
            navigate('/dashboard')
        } catch (err) {
            console.log(err);
            return false;
        }
    }


    return (
        <div align="center">
            <h2>Login Page</h2>
            <div align="center">
                <h2>Google Auth</h2><br />
                <button onClick={() => handleSubmit()}>Sign In  With Google</button>
            </div>
        </div>
    )
}

export default Login