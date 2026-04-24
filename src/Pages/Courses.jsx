import { useMemo, useState } from "react";
import CoursesHero from "../Components/Courses/CoursesHero";
import CoursesFilterBar from "../Components/Courses/CoursesFilterBar";
import CoursesGrid from "../Components/Courses/CoursesGrid";
import CoursesWhyArchitect from "../Components/Courses/CoursesWhyArchitect";
import CoursesVoices from "../Components/Courses/CoursesVoices";
import CoursesJourneyCTA from "../Components/Courses/CoursesJourneyCTA";
import { COURSES, filterCourses } from "../Components/Courses/courseData";

const DEFAULT_CATEGORY = "all";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const visible = useMemo(
    () => filterCourses(COURSES, { selectedCategory }),
    [selectedCategory]
  );

  return (
    <main className="min-h-screen bg-white">
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
