import { useMemo } from "react";
import NewResultsHero from "../Components/Results/NewResultsHero";
import NewResultsGallery from "../Components/Results/NewResultsGallery";
import ResultsCTA from "../Components/Results/ResultsCTA";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

export default function NewResults() {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Results", path: "/results" },
        { name: "New Results", path: "/results/new" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.newResults.title}
        description={seoConfig.newResults.description}
        keywords={seoConfig.newResults.keywords}
        path={seoConfig.newResults.path}
        jsonLd={jsonLd}
      />
      <NewResultsHero />
      <NewResultsGallery />
      <ResultsCTA />
    </main>
  );
}
