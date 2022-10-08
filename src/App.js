import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./dash/User";
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;