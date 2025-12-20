import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import About from './Pages/About'
import Faculty from './Pages/Faculty'
import Courses from './Pages/Courses'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
