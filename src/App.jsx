import React from 'react'
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

const App = () => {
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
