import Layout from './layouts/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Campaigns from './pages/Campaigns'

function App() {
  
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><Home/></Layout>} />
        {/* About Us */}
        <Route path="/about-us" element={<Layout><AboutUs/></Layout>} />
        {/* Campaigns */}
        <Route path="/campaigns" element={<Layout><Campaigns/></Layout>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
