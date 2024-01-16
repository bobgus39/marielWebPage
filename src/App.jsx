import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Panes from "./pages/Panes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/marielWebPage.github.io"
            element={<Home></Home>}
          ></Route>
          <Route
            path="/marielWebPage.github.io/panes"
            element={<Panes></Panes>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
