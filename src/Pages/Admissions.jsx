import { useMemo } from "react";
import AdmissionsHero from "../Components/Admissions/AdmissionsHero";
import AdmissionsFormSection from "../Components/Admissions/AdmissionsFormSection";
import AdmissionsFAQ from "../Components/Admissions/AdmissionsFAQ";
import AdmissionsCTA from "../Components/Admissions/AdmissionsCTA";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

export default function Admissions() {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Admissions", path: "/admissions" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.admissions.title}
        description={seoConfig.admissions.description}
        keywords={seoConfig.admissions.keywords}
        path={seoConfig.admissions.path}
        jsonLd={jsonLd}
      />
      <AdmissionsHero />
      <AdmissionsFormSection />
      <AdmissionsFAQ />
      <AdmissionsCTA />
    </main>
  );
}
