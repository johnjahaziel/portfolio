import AboutPage from "./components/AboutPage";
import HeroSection from "./components/Herosection";
import TechnicalJourney from "./components/TechnicalJourney";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div style={{ background: "black" }}>
      <HeroSection />
      <AboutPage />
      <TechnicalJourney />
      {/* <Projects />
      <Contact /> */}
      {/* You can keep adding more sections */}
    </div>
  );
};

export default App;
