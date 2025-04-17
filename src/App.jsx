import { useState } from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import TentacleBackground from './pages/background'
import Navbar from './pages/Navbar'
import HomePage from './pages/Homepage'
function App() {


  return (
    <>   
     <TentacleBackground />

     <div style={{ position: "relative", zIndex: 2, color: "white", padding: 20 }}>
    
        <Navbar/>
        <HomePage/>
      </div>


    </>
  )
}

export default App
