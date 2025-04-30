import React from 'react'
import Hero from '../components/About/Hero'
import About from '../components/About/About'
import Team from '../components/About/Team'
import MissionValuesAbout from '../components/About/MissionValuesAbout'
import Action from '../components/Action'

const AboutUs = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <MissionValuesAbout/>
      <Team/>
      <Action/>
    </div>
  )
}

export default AboutUs