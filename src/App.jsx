import { useState } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'

function App() {
  
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><Home/></Layout>} />
        {/* About Us */}
        <Route path="/about-us" element={<Layout><AboutUs/></Layout>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
