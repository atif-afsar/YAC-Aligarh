import ResultsHero from "../Components/Results/ResultsHero";
import ResultsRankers from "../Components/Results/ResultsRankers";
import ResultsGallery from "../Components/Results/ResultsGallery";
import ResultsCTA from "../Components/Results/ResultsCTA";

export default function Results() {
  return (
    <main className="min-h-screen bg-white">
      <ResultsHero />
      <ResultsRankers />
      <ResultsGallery />
      <ResultsCTA />
    </main>
  );
}
