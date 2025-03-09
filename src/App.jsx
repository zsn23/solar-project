// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Routes, Route  } from 'react-router-dom';
import Header_ from "./Components/Header_"
import Footer from './Components/Footer';

function App() {
  
  return (
    <>
      <Header_ />

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

     <Footer />
    </>
  )
}

export default App
