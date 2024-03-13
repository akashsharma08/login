// import './App.css'
import Welcome from "./components/Welcome"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App flex justify-center items-center h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;