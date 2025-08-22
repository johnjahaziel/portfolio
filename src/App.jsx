import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import EducationPath from "./components/EducationPath";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import TechnicalJourney from "./components/TechnicalJourney";
import Techstack from "./components/Techstack";

const App = () => {
  return (
    <div style={{ background: "black", position: "relative", zIndex: 0 }}>
      <HeroSection />
      <AboutPage />
      <TechnicalJourney />
      <EducationPath />
      <Experience />
      <Techstack />
      <Projects />
      <Contact />
      {/* You can keep adding more sections */}
    </div>
  );
};

export default App;
