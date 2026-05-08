import React, { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import Footer from './Components/Home/Footer'
import Loader from './Components/common/Loader'
import { SmoothScrollProvider, useSmoothScroll } from './Components/common/SmoothScrollProvider'
import Home from './Pages/Home'

// Below-the-fold UI is loaded lazily so it never blocks the Home LCP.
const FloatingQuickActions = lazy(() => import('./Components/common/FloatingQuickActions'))
const LeadCapturePopup = lazy(() => import('./Components/common/LeadCapturePopup'))

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
const BestCoachingInAligarh = lazy(() => import('./Pages/BestCoachingInAligarh'))
const CommerceCoaching = lazy(() => import('./Pages/CommerceCoaching'))
const BestScienceCoaching = lazy(() => import('./Pages/BestScienceCoaching'))
const BestJuniorCoaching = lazy(() => import('./Pages/BestJuniorCoaching'))
const BestCACoaching = lazy(() => import('./Pages/BestCACoaching'))
const BestCMACoaching = lazy(() => import('./Pages/BestCMACoaching'))
const BestEntranceCoaching = lazy(() => import('./Pages/BestEntranceCoaching'))

function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useSmoothScroll()

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
    // ScrollTrigger.refresh is expensive; defer it so it never blocks paint.
    // Run after native scroll resets too (Lenis off on touch/narrow) so pinned
    // sections stay correct on route changes.
    let cancelled = false
    const id = window.requestAnimationFrame(async () => {
      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        if (!cancelled) ScrollTrigger.refresh()
      } catch { /* noop */ }
    })
    return () => {
      cancelled = true
      window.cancelAnimationFrame(id)
    }
  }, [pathname, lenis])

  return null
}

function RouteFallback() {
  return <div className="min-h-screen bg-white" aria-hidden />
}

const App = () => {
  const { pathname } = useLocation()
  // One intro per full page load (App does not remount on client navigation).
  // Previously home never set showLoader=true (LCP experiment) and Loader was
  // lazy — so the chunk often arrived after the timeout and nothing appeared.
  const [showLoader, setShowLoader] = useState(true)
  const initialPathRef = useRef(pathname)

  useEffect(() => {
    const isHome = initialPathRef.current === '/'
    const duration = isHome ? 600 : 800
    const timer = window.setTimeout(() => {
      setShowLoader(false)
    }, duration)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-coaching-in-aligarh" element={<BestCoachingInAligarh />} />
          <Route path="/commerce-coaching-aligarh" element={<CommerceCoaching />} />
          <Route path="/best-science-coaching-in-aligarh" element={<BestScienceCoaching />} />
          <Route path="/junior-wing-coaching" element={<BestJuniorCoaching />} />
          <Route path="/ca-foundation-coaching" element={<BestCACoaching />} />
          <Route path="/best-cma-coaching-in-aligarh" element={<BestCMACoaching />} />
          <Route path="/entrance-exam-coaching" element={<BestEntranceCoaching />} />
          <Route path="/commerce-coaching" element={<Navigate to="/commerce-coaching-aligarh" replace />} />
          <Route path="/best-junior-coaching-in-aligarh" element={<Navigate to="/junior-wing-coaching" replace />} />
          <Route path="/best-ca-coaching-in-aligarh" element={<Navigate to="/ca-foundation-coaching" replace />} />
          <Route path="/best-entrance-coaching-in-aligarh" element={<Navigate to="/entrance-exam-coaching" replace />} />
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
        <Suspense fallback={null}>
          <FloatingQuickActions />
          <LeadCapturePopup />
        </Suspense>
        <Footer />
      </Suspense>

      {/* One intro per full page load; same instance so Framer exit animation runs. */}
      <Loader isLoaded={!showLoader} />
    </SmoothScrollProvider>
  )
}

export default App
