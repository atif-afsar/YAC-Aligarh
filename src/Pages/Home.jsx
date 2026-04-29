import React, { Suspense, lazy } from "react";
import Hero from "../Components/Home/Hero";
import Stats from "../Components/Home/Stats";
import CoursesSection from "../Components/Home/CoursesSection";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Testimonials from "../Components/Home/Testimonials";
import AdmissionsCTA from "../Components/Home/AdmissionsCTA";
import BestResultsPreview from "../Components/Home/BestResultsPreview";

const YoutubeVideosMarquee = lazy(() =>
  import("../Components/Home/YoutubeVideosMarquee")
);
const InstaReelsMarquee = lazy(() =>
  import("../Components/Home/InstaReelsMarquee")
);
const YoutubeMobileCTA = lazy(() => import("../Components/Home/YoutubeMobileCTA"));
const Methodology = lazy(() => import("../Components/Home/Methodology"));
const LearningLabs = lazy(() => import("../Components/Home/LearningLabs"));
const VideoEnrollSection = lazy(() =>
  import("../Components/Home/VideoEnrollSection")
);
const FaqsSection = lazy(() => import("../Components/Home/FaqsSection"));

function SectionFallback() {
  return <div className="h-16 sm:h-20" aria-hidden />;
}

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      <CoursesSection />
      <Suspense fallback={<SectionFallback />}>
        <YoutubeVideosMarquee />
      </Suspense>
      <BestResultsPreview />
      <WhyChooseUs />
      <Suspense fallback={<SectionFallback />}>
        <InstaReelsMarquee />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <YoutubeMobileCTA />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Methodology />
      </Suspense>
      <Testimonials />
      <Suspense fallback={<SectionFallback />}>
        <LearningLabs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <VideoEnrollSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FaqsSection />
      </Suspense>
      <AdmissionsCTA />
    </main>
  );
};

export default Home;
