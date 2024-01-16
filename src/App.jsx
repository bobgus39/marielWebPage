import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Panes from "./pages/Panes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/panes" element={<Panes></Panes>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
