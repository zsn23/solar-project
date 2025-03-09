// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route  } from 'react-router-dom';
// Pages
import Home from './Pages/Home'
import AboutUS from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
// Components
import Header_ from "./Components/Header_"
import Footer from './Components/Footer';
import SolarProductDetails from './Components/Products & Product Details/SolarProductDetails';


function App() {
  
  return (
    <>
      <Header_ />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/product/:id" element={<SolarProductDetails />} />        
      </Routes>

     <Footer />
    </>
  )
}

export default App
