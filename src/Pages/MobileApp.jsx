import { useMemo } from "react";
import MobileAppSection from "../Components/common/MobileAppSection";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

export default function MobileApp() {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Mobile App", path: "/mobile-app" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.mobileApp.title}
        description={seoConfig.mobileApp.description}
        keywords={seoConfig.mobileApp.keywords}
        path={seoConfig.mobileApp.path}
        jsonLd={jsonLd}
      />
      <MobileAppSection />
    </main>
  );
}
