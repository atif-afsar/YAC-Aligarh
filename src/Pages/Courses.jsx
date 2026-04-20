import { useState } from "react";
import CoursesHero from "../Components/Courses/CoursesHero";
import CoursesGrid from "../Components/Courses/CoursesGrid";
import CoursesWhyArchitect from "../Components/Courses/CoursesWhyArchitect";
import CoursesVoices from "../Components/Courses/CoursesVoices";
import CoursesJourneyCTA from "../Components/Courses/CoursesJourneyCTA";

const DEFAULT_FILTER = "all";

export default function Courses() {
  const [filter, setFilter] = useState(DEFAULT_FILTER);

  return (
    <main className="min-h-screen bg-white">
      <CoursesHero active={filter} onChange={setFilter} />
      <CoursesGrid filter={filter} />
      <CoursesWhyArchitect />
      <CoursesVoices />
      <CoursesJourneyCTA />
    </main>
  );
}
