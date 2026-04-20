import AdmissionsHero from "../Components/Admissions/AdmissionsHero";
import AdmissionsFormSection from "../Components/Admissions/AdmissionsFormSection";
import AdmissionsFAQ from "../Components/Admissions/AdmissionsFAQ";
import AdmissionsCTA from "../Components/Admissions/AdmissionsCTA";

export default function Admissions() {
  return (
    <main className="min-h-screen bg-white">
      <AdmissionsHero />
      <AdmissionsFormSection />
      <AdmissionsFAQ />
      <AdmissionsCTA />
    </main>
  );
}
