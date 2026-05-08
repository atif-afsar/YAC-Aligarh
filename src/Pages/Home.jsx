import React, { Suspense, lazy, memo, useMemo } from "react";
import Hero from "../Components/Home/Hero";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";
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
const SeoLocalContent = lazy(() => import("../Components/Home/SeoLocalContent"));

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
  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]),
    ],
    []
  );

  return (
    <main className="bg-white">
      <Seo
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        path={seoConfig.home.path}
        jsonLd={jsonLd}
      />
      <Hero />

      {/* Each below-the-fold block is wrapped in a `cv-auto` div so the
          browser can skip layout/paint for whatever isn't on screen yet.
          intrinsic-size: prevents layout shift while sections are skipped. */}

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 320px" }}>
        <Suspense fallback={<StatsCoursesFallback />}>
          <Stats />
          <CoursesSection />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 600px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[22rem] bg-white" />}>
          <YoutubeVideosMarquee />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 320px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[260px]" />}>
          <BestResultsPreview />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 480px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[28rem]" />}>
          <WhyChooseUs />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 320px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[260px]" />}>
          <InstaReelsMarquee />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 320px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[280px]" />}>
          <YoutubeMobileCTA />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 320px" }}>
        <Suspense fallback={<SectionFallback />}>
          <Methodology />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 360px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[340px]" />}>
          <Testimonials />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 600px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[560px]" />}>
          <LearningLabs />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 540px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[340px]" />}>
          <VideoEnrollSection />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 480px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[28rem]" />}>
          <FaqsSection />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 420px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[24rem]" />}>
          <SeoLocalContent />
        </Suspense>
      </div>

      <div className="cv-auto" style={{ containIntrinsicSize: "1px 320px" }}>
        <Suspense fallback={<SectionFallback className="min-h-[280px]" />}>
          <AdmissionsCTA />
        </Suspense>
      </div>
    </main>
  );
});

export default Home;
