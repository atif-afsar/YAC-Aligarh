import React from "react";
import Hero from "../Components/Home/Hero";
import Stats from "../Components/Home/Stats";
import CoursesSection from "../Components/Home/CoursesSection";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Methodology from "../Components/Home/Methodology";
import Testimonials from "../Components/Home/Testimonials";
import LearningLabs from "../Components/Home/LearningLabs";
import AdmissionsCTA from "../Components/Home/AdmissionsCTA";

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      <CoursesSection />
      <WhyChooseUs />
      <Methodology />
      <Testimonials />
      <LearningLabs />
      <AdmissionsCTA />
    </main>
  );
};

export default Home;
