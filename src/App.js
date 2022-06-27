import "./App.css";
import Navbar from "./components/shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="mx-5">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
