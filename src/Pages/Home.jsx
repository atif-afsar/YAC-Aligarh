import React from 'react'
import Hero from '../Components/Home/Hero'
import Story from '../Components/Home/Story'
import HeroIntro from '../Components/Home/HeroIntro'
import Stats from '../Components/Home/Stats'
import Programs from '../Components/Home/Programs'

const Home = () => {
  return (
    <div>
     <Hero />
     <HeroIntro /> 
      <Programs />
     <Story />
    </div>
  )
}

export default Home
