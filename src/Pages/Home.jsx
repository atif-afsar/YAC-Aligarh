import React, { Suspense, lazy, memo } from "react";
import Hero from "../Components/Home/Hero";
const Stats = lazy(() => import("../Components/Home/Stats"));
const CoursesSection = lazy(() => import("../Components/Home/CoursesSection"));
const WhyChooseUs = lazy(() => import("../Components/Home/WhyChooseUs"));
const Testimonials = lazy(() => import("../Components/Home/Testimonials"));
const AdmissionsCTA = lazy(() => import("../Components/Home/AdmissionsCTA"));
const BestResultsPreview = lazy(() =>
  import("../Components/Home/BestResultsPreview")
);

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

function SectionFallback({ className = "min-h-24 bg-white sm:min-h-[7rem]" }) {
  return <div className={className} aria-hidden />;
}

function StatsCoursesFallback() {
  return (
    <div className="min-h-[320px] sm:min-h-[380px]" aria-hidden>
      <div className="h-40 bg-gradient-to-b from-white via-red-50/35 to-white" />
      <div className="h-48 bg-gradient-to-b from-red-50/40 via-white to-rose-50/30 sm:h-[26rem]" />
    </div>
  );
}

const Home = memo(function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <Suspense fallback={<StatsCoursesFallback />}>
        <Stats />
        <CoursesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[22rem] bg-white" />}>
        <YoutubeVideosMarquee />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[260px]" />}>
        <BestResultsPreview />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[28rem]" />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[260px]" />}>
        <InstaReelsMarquee />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[280px]" />}>
        <YoutubeMobileCTA />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Methodology />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[340px]" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[560px]" />}>
        <LearningLabs />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[340px]" />}>
        <VideoEnrollSection />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[28rem]" />}>
        <FaqsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback className="min-h-[280px]" />}>
        <AdmissionsCTA />
      </Suspense>
    </main>
  );
});

export default Home;
