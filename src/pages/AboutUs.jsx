import React from 'react'
import Hero from '../components/About/Hero'
import About from '../components/About/About'
import MissionValues from '../components/Home/MissionValues'
import Team from '../components/About/Team'
import MissionValuesAbout from '../components/About/MissionValuesAbout'

const AboutUs = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <MissionValuesAbout/>
      <Team/>
    </div>
  )
}

export default AboutUs