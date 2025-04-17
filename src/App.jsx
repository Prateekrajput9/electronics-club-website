import { useState } from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import ParticlesComponent  from './pages/background'
import Navbar from './pages/Navbar'
import HomePage from './pages/Homepage'
function App() {


  return (
    <>   
     <ParticlesComponent  />

     <div style={{ position: "relative", zIndex: 2, color: "white", padding: 20 }}>
    
        <Navbar/>
        <HomePage/>
      </div>


    </>
  )
}

export default App
