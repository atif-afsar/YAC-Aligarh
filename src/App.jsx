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
import BlogPost from './Pages/BlogPost'
import Loader from './Components/common/Loader'
import FloatingQuickActions from './Components/common/FloatingQuickActions'

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
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
      <FloatingQuickActions />
      <Footer />
    </>
  )
}

export default App
