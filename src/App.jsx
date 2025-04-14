import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
       
      <div className="min-h-screen bg-gray-600 flex justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-500">TailwindCSS is Working!</h1>
 
    </div>
    
    </>
  )
}

export default App
