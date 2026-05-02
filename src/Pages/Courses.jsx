import { useMemo, useState } from "react";
import CoursesHero from "../Components/Courses/CoursesHero";
import CoursesFilterBar from "../Components/Courses/CoursesFilterBar";
import CoursesGrid from "../Components/Courses/CoursesGrid";
import CoursesWhyArchitect from "../Components/Courses/CoursesWhyArchitect";
import CoursesVoices from "../Components/Courses/CoursesVoices";
import CoursesJourneyCTA from "../Components/Courses/CoursesJourneyCTA";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";
import { COURSES, filterCourses } from "../Components/Courses/courseData";

const DEFAULT_CATEGORY = "all";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const visible = useMemo(
    () => filterCourses(COURSES, { selectedCategory }),
    [selectedCategory]
  );

  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.courses.title}
        description={seoConfig.courses.description}
        keywords={seoConfig.courses.keywords}
        path={seoConfig.courses.path}
        jsonLd={jsonLd}
      />
      <CoursesHero />
      <div className="relative border-b border-rose-100/70 bg-gradient-to-b from-white via-rose-50/30 to-white pb-8 pt-4 md:pb-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(220,53,69,0.1),transparent_65%)]" />
        <CoursesFilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <CoursesGrid courses={visible} />
      <CoursesWhyArchitect />
      <CoursesVoices />
      <CoursesJourneyCTA />
    </main>
  );
}
