import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import View from "./pages/View";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/crud" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
