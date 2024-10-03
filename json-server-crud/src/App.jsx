import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import DynamicDependent from "./pages/DynamicDependent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/dynamic" element={<DynamicDependent />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
