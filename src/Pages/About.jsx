import React, { useMemo } from 'react'
import AboutHero from '../Components/About/AboutHero'
import AboutStats from '../Components/About/AboutStats'
import OurPurpose from '../Components/About/OurPurpose'
import OurCoreValues from '../Components/About/OurCoreValues'
import OurStory from '../Components/About/OurStory'
import AboutCTA from '../Components/About/AboutCTA'
import Seo from '../Components/common/Seo'
import { seoConfig, buildBreadcrumbJsonLd } from '../seo/seoConfig'

const About = () => {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    []
  )

  return (
    <main className="pt-24">
      <Seo
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        path={seoConfig.about.path}
        jsonLd={jsonLd}
      />
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

