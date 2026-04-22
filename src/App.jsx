import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/common/Navbar'
import Footer from './Components/Home/Footer'
import About from './Pages/About'
import Faculty from './Pages/Faculty'
import Courses from './Pages/Courses'
import Blog from './Pages/Blog'
import Results from './Pages/Results'
import Admissions from './Pages/Admissions'
import MobileApp from './Pages/MobileApp'
import Youtube from './Pages/Youtube'
import Loader from './Components/common/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1700)

    return () => window.clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
