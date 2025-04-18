import { useState } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import ParticlesComponent from "./components/background";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
function App() {
  return (
    <>
      <ParticlesComponent />
      {/* <div
        style={{ position: "relative", zIndex: 2, color: "white", padding: 20 }}
      >
        <Navbar />
        <HomePage />
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
