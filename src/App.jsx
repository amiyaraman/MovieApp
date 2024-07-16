import React from "react"
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";


function App() {
  
  return (
    <div className=" bg-[#1F1E24] h-screen w-screen flex">
      <Routes>
        {/* Routes */}
        {/* Add your routes here */}
        {/* Example: <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Home />}/>
        
      </Routes>

    </div>
  );
}

export default App
