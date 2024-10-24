import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null
    })

    useEffect(() => {
        let userlogin = JSON.parse(localStorage.getItem("user"))
        setAuth({
            ...auth,
            user: userlogin
        })
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )

}
//costom hook
const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }