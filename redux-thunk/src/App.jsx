import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/users/Home"
import Dashboard from "./pages/admin/Dashboard"
import Users from "./pages/admin/User"
import Product from "./pages/admin/Product"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />


        {/* admin route */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
