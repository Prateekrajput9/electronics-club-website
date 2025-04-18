import { useState } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import ParticlesComponent from "./components/background";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import TeamPage from "./pages/Team";
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
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </>
  );
}

export default App;
