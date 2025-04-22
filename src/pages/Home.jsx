import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Pillars from '../components/Pillars'
import Involved from '../components/Involved'
import MissionValues from '../components/MissionValues'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <MissionValues/>
      <Pillars/>
    </div>
  )
}

export default Home