import React, { useMemo } from "react";
import FacultyPostersCarousel from "../Components/Faculty/FacultyPostersCarousel";
import FacultyHero from "../Components/Faculty/FacultyHero";
import FacultyPanel from "../Components/Faculty/FacultyPanel";
import FacultyWhy from "../Components/Faculty/FacultyWhy";
import FacultyCTA from "../Components/Faculty/FacultyCTA";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

const Faculty = () => {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Faculty", path: "/faculty" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.faculty.title}
        description={seoConfig.faculty.description}
        keywords={seoConfig.faculty.keywords}
        path={seoConfig.faculty.path}
        jsonLd={jsonLd}
      />
      <FacultyPostersCarousel />
      <FacultyHero />
      <FacultyPanel />
      <FacultyWhy />
      <FacultyCTA />
    </main>
  );
};

export default Faculty;
