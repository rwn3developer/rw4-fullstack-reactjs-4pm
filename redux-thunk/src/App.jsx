import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/users/Home"
import Dashboard from "./pages/admin/Dashboard"
import Users from "./pages/admin/User"
import Product from "./pages/admin/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminRoute from "./privateRoute/adminRoute"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />


        {/* admin route */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
