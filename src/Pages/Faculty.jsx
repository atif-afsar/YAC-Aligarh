import React from "react";
import FacultyHero from "../Components/Faculty/FacultyHero";
import FacultyPanel from "../Components/Faculty/FacultyPanel";
import FacultyWhy from "../Components/Faculty/FacultyWhy";
import FacultyCTA from "../Components/Faculty/FacultyCTA";

const Faculty = () => {
  return (
    <main className="min-h-screen bg-white">
      <FacultyHero />
      <FacultyPanel />
      <FacultyWhy />
      <FacultyCTA />
    </main>
  );
};

export default Faculty;
