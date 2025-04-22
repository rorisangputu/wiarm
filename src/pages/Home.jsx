import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Pillars from '../components/Pillars'
import MissionValues from '../components/MissionValues'
import Campaigns from '../components/Campaigns'
import BlogCTA from '../components/BlogCTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MissionValues />
      <Pillars />
      <Campaigns />
      <BlogCTA />
    </div>
  )
}

export default Home