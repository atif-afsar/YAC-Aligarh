import { useMemo } from "react";
import MobileAppSection from "../Components/common/MobileAppSection";
import YoutubeChannelSection from "../Components/common/YoutubeChannelSection";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

export default function Youtube() {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "YouTube", path: "/youtube" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.youtube.title}
        description={seoConfig.youtube.description}
        keywords={seoConfig.youtube.keywords}
        path={seoConfig.youtube.path}
        jsonLd={jsonLd}
      />
      <MobileAppSection />
      <YoutubeChannelSection />
    </main>
  );
}
