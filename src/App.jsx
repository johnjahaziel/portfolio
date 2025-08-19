import AboutPage from "./components/AboutPage";
import HeroSection from "./components/Herosection";
import TechnicalJourney from "./components/TechnicalJourney";

const App = () => {
  return (
    <div style={{ background: "black" }}>
      <HeroSection />
      <AboutPage />
      <TechnicalJourney />
      {/* You can keep adding more sections */}
    </div>
  );
};

export default App;
