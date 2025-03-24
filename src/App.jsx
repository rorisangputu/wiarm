import { useState } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
      </Routes>
    </div>
  )
}

export default App
