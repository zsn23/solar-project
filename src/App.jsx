// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route  } from 'react-router-dom';
// Pages
import Home from './Pages/Home'
import AboutUS from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Cart from './Pages/Cart';
// Components
import Header_ from "./Components/Header_"
import Footer from './Components/Footer';
import SolarProductDetails from './Components/Products & Product Details/SolarProductDetails';
import InverterProductDetail from './Components/Products & Product Details/InverterProductDetail';
import BatteryProductDetail from './Components/Products & Product Details/BatteryProductDetail';
import AccesoriesProductDetail from './Components/Products & Product Details/AccesoriesProductDetail';

function App() {
  
  return (
    <>
      <Header_ />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/solar-product/:id" element={<SolarProductDetails />} />    
        <Route path="/inverterProduct/:id" element={<InverterProductDetail />} />
        <Route path="/batteryProduct/:id" element={<BatteryProductDetail />} />
        <Route path="/AccesoryProduct/:id" element={<AccesoriesProductDetail />} />

      </Routes>

     <Footer />
    </>
  )
}

export default App
