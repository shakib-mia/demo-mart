import "./App.css";
import Navbar from "./components/shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="mx-5">
      <Navbar></Navbar>
      <div className="bg-slate-800 rounded-xl p-6 mt-5">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
