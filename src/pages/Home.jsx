import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Pillars from '../components/Pillars'
import MissionValues from '../components/MissionValues'
import Campaigns from '../components/Campaigns'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MissionValues />
      <Pillars />
      <Campaigns />
    </div>
  )
}

export default Home