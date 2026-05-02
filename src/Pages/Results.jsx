import { useMemo } from "react";
import ResultsHero from "../Components/Results/ResultsHero";
import ResultsRankers from "../Components/Results/ResultsRankers";
import ResultsGallery from "../Components/Results/ResultsGallery";
import ResultsCTA from "../Components/Results/ResultsCTA";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

export default function Results() {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Results", path: "/results" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.results.title}
        description={seoConfig.results.description}
        keywords={seoConfig.results.keywords}
        path={seoConfig.results.path}
        jsonLd={jsonLd}
      />
      <ResultsHero />
      <ResultsRankers />
      <ResultsGallery />
      <ResultsCTA />
    </main>
  );
}
