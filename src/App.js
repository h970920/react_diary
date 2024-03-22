import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./util.js";
import Home from "./pages/Home.js";
import Edit from "./pages/Edit.js";
import New from "./pages/New.js";
import Diary from "./pages/Diary.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </div>
  );
}

export default App;
