import React from 'react'
import Hero from '../components/Home/Hero'
import AboutSection from '../components/Home/AboutSection'
import Pillars from '../components/Home/Pillars'
import MissionValues from '../components/Home/MissionValues'
import Campaigns from '../components/Home/Campaigns'
import BlogCTA from '../components/Home/BlogCTA'
import Action from '../components/Action'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MissionValues />
      <Pillars />
      <Campaigns />
      <BlogCTA />
      <Action/>
    </div>
  )
}

export default Home