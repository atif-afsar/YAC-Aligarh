import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import AboutStats from '../Components/About/AboutStats'
import OurPurpose from '../Components/About/OurPurpose'
import OurCoreValues from '../Components/About/OurCoreValues'
import OurStory from '../Components/About/OurStory'
import AboutCTA from '../Components/About/AboutCTA'

const About = () => {
  return (
    <main className="pt-24">
      <AboutHero />
      <AboutStats />
      <OurPurpose />
      <OurCoreValues />
      <OurStory />
      <AboutCTA />
    </main>
  )
}

export default About

