import React, { Suspense, lazy, useEffect, useLayoutEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Components/common/Navbar'
import Footer from './Components/Home/Footer'
import FloatingQuickActions from './Components/common/FloatingQuickActions'
import Loader from './Components/common/Loader'
import { SmoothScrollProvider, useSmoothScroll } from './Components/common/SmoothScrollProvider'
import Home from './Pages/Home'

const Blog = lazy(() => import('./Pages/Blog'))
const BlogPost = lazy(() => import('./Pages/BlogPost'))
const About = lazy(() => import('./Pages/About'))
const Faculty = lazy(() => import('./Pages/Faculty'))
const Courses = lazy(() => import('./Pages/Courses'))
const Results = lazy(() => import('./Pages/Results'))
const Admissions = lazy(() => import('./Pages/Admissions'))
const MobileApp = lazy(() => import('./Pages/MobileApp'))
const OnlineCourses = lazy(() => import('./Pages/OnlineCourses'))
const Youtube = lazy(() => import('./Pages/Youtube'))

function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useSmoothScroll()

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [pathname, lenis])

  return null
}

function RouteFallback() {
  return <div className="min-h-screen bg-white" aria-hidden />
}

const App = () => {
  const { pathname } = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loaderDuration = pathname === '/' ? 250 : 700
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, loaderDuration)
    return () => window.clearTimeout(timer)
  }, [pathname])

  if (isLoading) {
    return <Loader isLoaded={false} />
  }

  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <>
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
            <Route path="/online-courses" element={<OnlineCourses />} />
            <Route path="/youtube" element={<Youtube />} />
          </Routes>
          <FloatingQuickActions />
          <Footer />
        </>
      </Suspense>
    </SmoothScrollProvider>
  )
}

export default App
