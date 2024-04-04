import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import DoctorLogin from "./pages/Doctor/DoctorLogin";
import DoctorRegister from "./pages/Doctor/DoctorRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctorLogin" element={<DoctorLogin />} />
        <Route path="/doctorRegister" element={<DoctorRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
