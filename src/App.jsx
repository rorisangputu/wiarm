import Layout from './layouts/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Campaigns from './pages/Campaigns'
import CampaignDetail from './components/Campaigns/CampaignDetail'
import Contact from './pages/Contact'

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
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/campaigns/:id" element={<Layout><CampaignDetail /></Layout>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
